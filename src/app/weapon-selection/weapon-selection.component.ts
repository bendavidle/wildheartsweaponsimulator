import { Component } from '@angular/core';

import { weapons, Weapon } from '../resources/weapons';

@Component({
  selector: 'app-weapon-selection',
  templateUrl: './weapon-selection.component.html',
  styleUrls: ['./weapon-selection.component.scss'],
})
export class WeaponSelectionComponent {
  public weapons: Weapon[] = [];

  constructor() {
    this.weapons = weapons;
  }
}
