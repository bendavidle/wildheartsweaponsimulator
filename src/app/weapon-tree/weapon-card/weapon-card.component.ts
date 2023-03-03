import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Material } from 'src/app/resources/materials';
import { Skill } from 'src/app/resources/skills';
import { WeaponNode, WeaponSkill } from 'src/app/resources/weapons';
import { WeaponService } from 'src/app/services/weapon.service';

export interface SkillClickEvent {
  skill: WeaponSkill;
  toggle: boolean;
}

@Component({
  selector: 'weapon-card',
  templateUrl: './weapon-card.component.html',
  styleUrls: ['./weapon-card.component.scss'],
})
export class WeaponCardComponent {
  @Input()
  public node!: WeaponNode;

  @Input()
  public selectedNode?: WeaponNode;

  @Input()
  public compareMode = false;

  @Input()
  public compareNode?: WeaponNode;

  @Input()
  public prevNode = false;

  @Output()
  public skillClick = new EventEmitter<SkillClickEvent>();

  public get skillSlots(): number[] {
    return Array(this.node.skillSlots)
      .fill(0)
      .map((x, i) => i);
  }

  constructor(private weaponService: WeaponService) {}

  public compareValue(v1: number | undefined, v2: number | undefined): { color: string } {
    if (!this.selectedNode || v1 === undefined || v2 === undefined || v1 === v2) {
      return {
        color: '',
      };
    }

    if (v1 > v2) {
      return {
        color: 'red',
      };
    } else {
      return {
        color: 'green',
      };
    }
  }

  public getMaterial(materialId: number): Material {
    return this.weaponService.getMaterialById(materialId);
  }

  public getSkill(skillId: number): Skill {
    return this.weaponService.getSkillById(skillId);
  }

  public onSkillClick(skill: WeaponSkill, skillToggle: HTMLElement): void {
    const toggle = skillToggle.classList.contains('skill-disabled');
    if (!this.compareMode || ((this.compareNode?.skillSlots ?? 0) < 1 && !toggle)) {
      return;
    }

    skillToggle.classList.toggle('skill-disabled');

    this.skillClick.emit({
      skill: skill,
      toggle: toggle,
    });
  }
}
