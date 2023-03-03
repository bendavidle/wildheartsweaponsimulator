import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeaponSelectionComponent } from './weapon-selection/weapon-selection.component';
import { WeaponTreeComponent } from './weapon-tree/weapon-tree.component';

const routes: Routes = [
  {
    path: '',
    component: WeaponSelectionComponent,
  },
  {
    path: 'weapon-tree/:id',
    component: WeaponTreeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
