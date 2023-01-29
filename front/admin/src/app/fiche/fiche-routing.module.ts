import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FichePaiementComponent } from './fiche-paiement/fiche-paiement.component';
import { FicheDepotComponent } from './fiche-depot/fiche-depot.component';
import { ListeFicheComponent } from './liste-fiche/liste-fiche.component';
import { FicheGarageClientComponent } from './fiche-garage-client/fiche-garage-client.component';
import { FicheDetailsComponent } from './fiche-details/fiche-details.component';

const routes: Routes = [{ path: '', component: ListeFicheComponent },
  { path: 'liste-fiche', component: ListeFicheComponent },
  { path: 'depot', component: FicheDepotComponent },
  { path: 'garage', component: FicheGarageClientComponent },
  { path: 'details/:id', component: FicheDetailsComponent },
  { path: 'fiche-paiement', component: FichePaiementComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [
    RouterModule
  ]
})
export class FicheRoutingModule { }
