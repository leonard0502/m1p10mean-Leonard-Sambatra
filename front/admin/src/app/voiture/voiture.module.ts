import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VoitureRoutingModule } from './voiture-routing.module';
import { VoitureComponent } from './voiture.component';
import { AjoutReparationComponent } from './ajout-reparation/ajout-reparation.component';


@NgModule({
  declarations: [VoitureComponent, AjoutReparationComponent],
  imports: [
    CommonModule,
    VoitureRoutingModule
  ]
})
export class VoitureModule { }
