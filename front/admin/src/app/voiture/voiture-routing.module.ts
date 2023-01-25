import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VoitureComponent } from './voiture.component';
import { AjoutReparationComponent } from './ajout-reparation/ajout-reparation.component';
import { HistoriqueReparationComponent } from './historique-reparation/historique-reparation.component';
import { FactureComponent } from './facture/facture.component';
import { StatistiqueReparationComponent } from './statistique-reparation/statistique-reparation.component';

const routes: Routes = [{ path: '', component: VoitureComponent }, 
{ path: 'ajout-reparation', component: AjoutReparationComponent }, 
{ path: 'facture', component: FactureComponent }, 
{ path: 'statistique-reparation', component: StatistiqueReparationComponent }, 
{ path: 'historique-reparation', component: HistoriqueReparationComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VoitureRoutingModule { }
