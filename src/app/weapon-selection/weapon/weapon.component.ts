import { Component, Input } from '@angular/core';
import { Weapon } from '../../resources/weapons';

@Component({
  selector: 'weapon',
  templateUrl: './weapon.component.html',
  styleUrls: ['./weapon.component.scss'],
})
export class WeaponComponent {
  @Input()
  public weapon!: Weapon;
}
