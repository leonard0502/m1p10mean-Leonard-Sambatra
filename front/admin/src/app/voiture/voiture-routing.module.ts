import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VoitureComponent } from './voiture.component';
import { AjoutReparationComponent } from './ajout-reparation/ajout-reparation.component';
import { HistoriqueReparationComponent } from './historique-reparation/historique-reparation.component';

const routes: Routes = [{ path: '', component: VoitureComponent }, 
{ path: 'ajout-reparation', component: AjoutReparationComponent }, 
{ path: 'historique-reparation', component: HistoriqueReparationComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VoitureRoutingModule { }
