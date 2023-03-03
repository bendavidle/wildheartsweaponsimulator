import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { WeaponNode } from 'src/app/resources/weapons';
import { Material } from 'src/app/resources/materials';

export interface NodeHoverEvent {
  show: boolean;
  node: WeaponNode;
}

export interface NodeClickEvent {
  node: WeaponNode;
  isSelection: boolean;
  shiftKey: boolean;
}

@Component({
  selector: 'weapon-node',
  templateUrl: './weapon-node.component.html',
  styleUrls: ['./weapon-node.component.scss'],
})
export class WeaponNodeComponent {
  @Input()
  public node!: WeaponNode;

  @Input()
  public fullScreen = false;
  @Input()
  public selected!: boolean;

  @Input()
  public selection!: boolean;

  @Input()
  public disabled!: boolean;

  @Output()
  public nodeHover = new EventEmitter<NodeHoverEvent>();

  @Output()
  public nodeClick = new EventEmitter<NodeClickEvent>();

  @ViewChild('anchor')
  public anchor!: ElementRef<HTMLDivElement>;

  public materials!: Material[];

  public getRankStyle(): string {
    switch (this.node.rank) {
      case 1:
        return 'node-rank-1';
      case 2:
        return 'node-rank-2';
      case 3:
        return 'node-rank-3';
      case 4:
        return 'node-rank-4';
      case 5:
        return 'node-rank-5';
      case 6:
        return 'node-rank-6';
      default:
        return 'node-rank-1';
    }
  }

  constructor(public elementRef: ElementRef<HTMLDivElement>) {}

  public onNodeHover(show: boolean): void {
    this.nodeHover.emit({
      show: show,
      node: this.node,
    });
  }

  public onNodeClick(event: Event): void {
    const clickEvent = event as PointerEvent;
    if (!this.disabled) {
      this.nodeClick.emit({
        node: this.node,
        isSelection: this.selection,
        shiftKey: clickEvent.shiftKey,
      });
    }
  }
}
