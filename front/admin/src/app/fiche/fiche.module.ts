import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FicheRoutingModule } from './fiche-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

import { FicheComponent } from './fiche.component';
import { ListeFicheComponent } from './liste-fiche/liste-fiche.component';
import { FichePaiementComponent } from './fiche-paiement/fiche-paiement.component';
import { FicheDepotComponent } from './fiche-depot/fiche-depot.component';
import { FicheGarageClientComponent } from './fiche-garage-client/fiche-garage-client.component';
import { FicheDetailsComponent } from './fiche-details/fiche-details.component';



@NgModule({
  declarations: [
    FicheComponent,
    ListeFicheComponent,
    FichePaiementComponent,
    FicheDepotComponent,
    FicheGarageClientComponent,
    FicheDetailsComponent
  ],
  imports: [
    CommonModule,
    FicheRoutingModule,
    ReactiveFormsModule
  ]
})
export class FicheModule { }
