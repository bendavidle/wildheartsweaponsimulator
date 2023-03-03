import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeaponSelectionComponent } from './weapon-selection/weapon-selection.component';
import { WeaponComponent } from './weapon-selection/weapon/weapon.component';
import { WeaponTreeComponent } from './weapon-tree/weapon-tree.component';
import { WeaponNodeComponent } from './weapon-tree/weapon-node/weapon-node.component';
import { WeaponService } from './services/weapon.service';
import { DragScrollModule } from 'ngx-drag-scroll';
import { WeaponCardComponent } from './weapon-tree/weapon-card/weapon-card.component';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faExpand, faArrowRotateLeft } from '@fortawesome/free-solid-svg-icons';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  declarations: [
    AppComponent,
    WeaponSelectionComponent,
    WeaponComponent,
    WeaponTreeComponent,
    WeaponNodeComponent,
    WeaponCardComponent,
  ],
  providers: [WeaponService],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DragScrollModule,
    FontAwesomeModule,
    MatIconModule,
    MatTooltipModule,
  ],
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(faExpand, faArrowRotateLeft);
  }
}
