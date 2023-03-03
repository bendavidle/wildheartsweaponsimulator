import { Injectable } from '@angular/core';
import { weapons, Weapon, WeaponNode, WeaponType, BowNodes } from '../resources/weapons';
import { Material, Materials } from '../resources/materials';
import { Skill, Skills } from '../resources/skills';

@Injectable({
  providedIn: 'root',
})
export class WeaponService {
  public getAllWeapons(): Weapon[] {
    return weapons;
  }

  public getWeaponById(weaponId: number): Weapon {
    return weapons.filter(x => x.id == weaponId)[0];
  }

  public getWeaponNodeById(weaponNodeId: number): WeaponNode {
    return BowNodes.filter(x => x.id == weaponNodeId)[0];
  }

  public getWeaponNodes(weaponType: WeaponType): WeaponNode[] {
    switch (weaponType) {
      case WeaponType.Bow:
        return BowNodes;
      default:
        return [];
    }
  }

  public getMaterialById(materialId: number): Material {
    return Materials.filter(x => x.id == materialId)[0];
  }

  public getSkillById(skillId: number): Skill {
    return Skills.filter(x => x.id == skillId)[0];
  }
}
