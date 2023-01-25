import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { VoitureRoutingModule } from './voiture-routing.module';
import { VoitureComponent } from './voiture.component';
import { AjoutReparationComponent } from './ajout-reparation/ajout-reparation.component';
import { HistoriqueReparationComponent } from './historique-reparation/historique-reparation.component';
import { FactureComponent } from './facture/facture.component';
import { StatistiqueReparationComponent } from './statistique-reparation/statistique-reparation.component';


@NgModule({
  declarations: [VoitureComponent, AjoutReparationComponent, HistoriqueReparationComponent, FactureComponent, StatistiqueReparationComponent],
  imports: [
    CommonModule,
    VoitureRoutingModule,
    ReactiveFormsModule
  ]
})
export class VoitureModule { }
