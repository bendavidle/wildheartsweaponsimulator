import { AfterViewInit, Component, ElementRef, NgZone, OnDestroy, OnInit, QueryList, ViewChild, ViewChildren, Renderer2, HostListener } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Weapon, WeaponNode, WeaponSkill } from '../resources/weapons';
import { NodeLine, Position } from './line';
import { WeaponService } from '../services/weapon.service';
import { NodeClickEvent, NodeHoverEvent, WeaponNodeComponent } from './weapon-node/weapon-node.component';
import { DragScrollComponent } from 'ngx-drag-scroll';
import { SkillClickEvent } from './weapon-card/weapon-card.component';

export interface LineRef {
  line: NodeLine;
  startingNodeId: number;
}

export interface Line {
  startNodeId: number;
  endNodeId: number;
  selection: boolean;
}

export interface TreeStateRaw {
  sId: string;
  sn: SelectedNodeRaw;
}

export interface SelectedNodeRaw {
  id: number;
  s: string;
}

export interface TreeState {
  selectedNodeIds: number[];
  selectedNode: SelectedNode;
}

export interface SelectedNode {
  nodeId: number;
  skills: WeaponSkill[];
}

@Component({
  selector: 'weapon-tree',
  templateUrl: './weapon-tree.component.html',
  styleUrls: ['./weapon-tree.component.scss'],
})
export class WeaponTreeComponent implements OnInit, OnDestroy, AfterViewInit {
  public weapon!: Weapon;
  public weaponId = 1;
  public weaponNodes!: WeaponNode[];
  public node?: WeaponNode;
  public selectedNode!: WeaponNode;
  public selectedNodes: WeaponNode[] = [];
  public show = false;
  public fullScreen = false;
  public enhancing = false;
  private enchanceHistory: WeaponNode[] = [];
  private routeSub!: Subscription;
  private lines: Line[] = [];
  private selectedLines: Line[] = [];
  private animate = false;
  private treePositionState!: Position;
  private rawState?: TreeStateRaw;

  @ViewChildren('node', { read: WeaponNodeComponent })
  private nodeElements!: QueryList<WeaponNodeComponent>;

  @ViewChild('lineCanvas', { static: true })
  lineCanvas!: ElementRef<HTMLCanvasElement>;

  @ViewChild('tree', { static: true })
  tree!: ElementRef<HTMLDivElement>;

  @ViewChild('scroller', { read: DragScrollComponent })
  ds!: DragScrollComponent;

  @HostListener('window:resize')
  onResize() {
    this.#drawLines();
  }

  private ctx!: CanvasRenderingContext2D | null;

  constructor(private router: Router, private route: ActivatedRoute, private weaponService: WeaponService, private ngZone: NgZone, private renderer: Renderer2) {}

  ngOnInit() {
    const queryParams = this.route.snapshot.queryParams;

    this.routeSub = this.route.params.subscribe(params => {
      this.weaponId = params['id'];
      this.weapon = this.weaponService.getWeaponById(this.weaponId);
      this.weaponNodes = this.weaponService.getWeaponNodes(this.weapon.weaponType);

      if (this.selectedNode) return;
      this.selectedNode = this.weaponNodes[0];
      this.enchanceHistory.push(this.weaponNodes[0]);
    });

    let rawState = queryParams['state'];

    if (!rawState) {
      return;
    }
    rawState = JSON.parse(window.atob(rawState));

    const state = this.#decodeState(rawState);
    const selectedNode: WeaponNode = JSON.parse(JSON.stringify(this.weaponService.getWeaponNodeById(state.selectedNode.nodeId)));
    const selectedNodes = state.selectedNodeIds.map(x => this.weaponService.getWeaponNodeById(x));
    const weaponNodes: WeaponNode[] = this.weaponService.getWeaponNodes(this.weapon.weaponType);

    selectedNode.skillSlots = selectedNode.inheritedSkills.length + selectedNode.skillSlots - state.selectedNode.skills.length;
    selectedNode.inheritedSkills = [...state.selectedNode.skills];

    this.selectedNode = selectedNode;

    this.weaponNodes = weaponNodes.map(x => (x.id !== this.selectedNode.id ? x : this.selectedNode));
    this.node = selectedNode;
    this.selectedNodes = [...selectedNodes];
  }

  ngAfterViewInit(): void {
    this.#scrollToNode(this.weaponNodes[0]);
    this.ctx = this.lineCanvas.nativeElement.getContext('2d');
    this.lineCanvas.nativeElement.width = this.tree.nativeElement.offsetWidth;
    this.lineCanvas.nativeElement.height = this.tree.nativeElement.offsetHeight;
    this.#createLines();
    this.renderer.setStyle(this.ds._contentRef.nativeElement, 'overflow', 'hidden');
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }

  public onScrollStart(): void {
    this.animate = true;
    this.#drawLines();
    this.ngZone.runOutsideAngular(() => window.requestAnimationFrame(() => this.#drawLines()));
  }

  public onScrollEnd(): void {
    this.animate = false;
  }

  public showInfo(event: NodeHoverEvent) {
    this.node = event.node;
    this.show = event.show;
  }

  public isSelected(node: WeaponNode): boolean {
    return node.id === this.selectedNode.id;
  }

  public isInSelection(node: WeaponNode): boolean {
    return this.selectedNodes.some(n => n.id === node.id);
  }

  public isDisabled(node: WeaponNode): boolean {
    if (node.id === this.selectedNode.id || this.selectedNodes.some(x => x.id === node.id)) {
      return false;
    }
    return !this.selectedNode.connectedNodes.some(x => x === node.id);
  }

  public nodeClick(event: NodeClickEvent): void {
    this.node = event.node;
    if (event.node.id === this.selectedNode.id) {
      return;
    }

    if (event.isSelection) {
      this.#undo(event.node);
    } else {
      this.enhancing = true;
    }
  }

  public onSkillClick(skillEvent: SkillClickEvent) {
    if (!this.node) {
      return;
    }
    const nodeClone = JSON.parse(JSON.stringify(this.node));
    if (skillEvent.toggle) {
      for (let i = nodeClone.inheritedSkills.length - 1; i >= 0; i--) {
        const skill: WeaponSkill = nodeClone.inheritedSkills[i];

        if (skill.skillId === skillEvent.skill.skillId && skill.value === skillEvent.skill.value) {
          nodeClone.inheritedSkills.splice(i, 1);
          break;
        }
      }
      nodeClone.skillSlots++;
    } else {
      if (nodeClone.skillSlots >= 1) {
        nodeClone.inheritedSkills.push(skillEvent.skill);
        nodeClone.skillSlots--;
      }
    }

    this.node = nodeClone;
  }

  public enhanceClick(nodeToEnhance: WeaponNode): void {
    if (!this.node) {
      return;
    }

    this.show = false;
    this.enhancing = false;

    const line: Line = {
      startNodeId: this.selectedNode.id,
      endNodeId: nodeToEnhance.id,
      selection: true,
    };

    this.selectedLines.push(line);

    this.selectedNodes = [...this.selectedNodes, this.selectedNode];

    const cloneOfEnhanceNode = JSON.parse(JSON.stringify(nodeToEnhance));

    this.selectedNode = cloneOfEnhanceNode;

    this.enchanceHistory.push(cloneOfEnhanceNode);

    const weaponNodes: WeaponNode[] = this.weaponService.getWeaponNodes(this.weapon.weaponType);

    this.weaponNodes = weaponNodes.map(x => (x.id !== this.selectedNode.id ? x : this.selectedNode));

    this.rawState = {
      sId: this.selectedNodes.map(x => x.id).join(','),
      sn: {
        id: this.selectedNode.id,
        s: this.selectedNode.inheritedSkills.map(x => `${x.skillId},${x.value}`).join('|'),
      },
    };

    this.router.navigate([], {
      queryParamsHandling: 'merge',
      replaceUrl: true,
      queryParams: {
        state: window.btoa(JSON.stringify(this.rawState)),
      },
    });
    this.#drawLines();
  }

  public cancelEnhancing(event: Event): void {
    const target = event.target as HTMLElement;
    if (target.classList.contains('weapon-compare') || target.classList.contains('inner-compare') || target.tagName === 'IMG') {
      this.enhancing = false;
    }
  }

  public onZoomOutClick(): void {
    this.fullScreen = !this.fullScreen;

    if (this.fullScreen) {
      this.treePositionState = {
        x: this.ds._contentRef.nativeElement.scrollLeft,
        y: this.ds._contentRef.nativeElement.scrollTop,
      };
    }

    window.requestAnimationFrame(() => this.#positonTree());
  }

  public onResetClick(): void {
    this.#reset();
  }

  #undo(node: WeaponNode) {
    const weaponNodes: WeaponNode[] = this.weaponService.getWeaponNodes(this.weapon.weaponType);
    const indexOfNode = this.selectedNodes.map(x => x.id).indexOf(node.id);

    this.selectedNodes = this.selectedNodes.slice(0, indexOfNode);
    this.selectedLines = this.selectedLines.slice(0, indexOfNode);
    this.enchanceHistory = this.enchanceHistory.slice(0, indexOfNode + 1);

    if (indexOfNode === 0) {
      this.#reset();
    } else {
      this.selectedNode = this.enchanceHistory[indexOfNode];
      this.node = this.enchanceHistory[indexOfNode];
      this.weaponNodes = weaponNodes.map(x => (x.id !== this.selectedNode.id ? x : this.selectedNode));
      this.#drawLines();
    }
  }

  #reset() {
    this.rawState = undefined;
    this.weapon = this.weaponService.getWeaponById(this.weaponId);
    this.weaponNodes = this.weaponService.getWeaponNodes(this.weapon.weaponType);
    this.selectedNode = this.weaponNodes[0];
    this.enchanceHistory = [this.weaponNodes[0]];
    this.selectedNodes = [];
    this.selectedLines = [];
    this.#drawLines();
    this.router.navigate([], {
      replaceUrl: true,
      queryParams: {
        state: null,
      },
      queryParamsHandling: 'merge',
    });
  }

  #positonTree() {
    if (!this.fullScreen) {
      this.ds._contentRef.nativeElement.scrollTo(this.treePositionState.x, this.treePositionState.y);
    }
    this.#drawLines();
  }

  #scrollToNode(node: WeaponNode): void {
    this.#getNodeComponent(node.id).anchor.nativeElement.scrollIntoView({
      behavior: 'auto',
      block: 'center',
      inline: 'center',
    });
    this.#drawLines();
  }

  #createLines() {
    for (let i = 0; i < this.weaponNodes.length; i++) {
      const node = this.weaponNodes[i];

      for (let j = 0; j < node.connectedNodes.length; j++) {
        const connectedNodeId = node.connectedNodes[j];

        const line: Line = {
          startNodeId: node.id,
          endNodeId: connectedNodeId,
          selection: false,
        };

        this.lines.push(line);
      }
    }

    const nodesSelectedLines = [...this.selectedNodes, this.selectedNode];

    for (let i = 0; i < nodesSelectedLines.length; i++) {
      console.log(nodesSelectedLines);
      const node = nodesSelectedLines[i];
      const nextNode = nodesSelectedLines[i + 1];

      if (!nextNode) break;

      const line: Line = {
        startNodeId: node.id,
        endNodeId: nextNode.id,
        selection: true,
      };

      this.selectedLines.push(line);
    }

    this.#drawLines();
  }

  #drawLines() {
    if (!this.ctx) {
      return;
    }

    this.ctx.clearRect(0, 0, this.lineCanvas.nativeElement.width, this.lineCanvas.nativeElement.height);

    const linesToDraw = [...this.lines, ...this.selectedLines];

    for (let i = 0; i < linesToDraw.length; i++) {
      const linePath = linesToDraw[i];
      const startAnchor = this.#getNodeComponent(linePath.startNodeId).anchor.nativeElement;
      const endAnchor = this.#getNodeComponent(linePath.endNodeId).anchor.nativeElement;

      const line = new NodeLine(this.ctx, startAnchor, endAnchor);

      if (linePath.selection) {
        //Selected Line Path Color
        line.color = '#c5f9f1';
      } else if ((linePath.startNodeId !== this.selectedNode.id && linePath.endNodeId !== this.selectedNode.id) || this.selectedNodes.some(x => x.id === linePath.endNodeId) || this.selectedNodes.some(x => x.id === linePath.startNodeId)) {
        //Disabled Line Path Color
        line.color = '#2e281f';
      } else {
        //Enable Line Path Color
        line.color = '#584e3c';
      }
      line.draw();
    }

    if (this.animate) {
      window.requestAnimationFrame(() => this.#drawLines());
    }
  }

  #getNodeComponent(nodeId: number): WeaponNodeComponent {
    return this.nodeElements.filter(nodeElement => nodeElement.node.id === nodeId)[0];
  }

  #decodeState(state: TreeStateRaw): TreeState {
    return {
      selectedNodeIds: state.sId.split(',').map(Number),
      selectedNode: {
        nodeId: state.sn.id,
        skills: state.sn.s
          .split('|')
          .map(x => x.split(','))
          .map(y => ({ skillId: parseInt(y[0]), value: y[1] })),
      },
    };
  }
}
