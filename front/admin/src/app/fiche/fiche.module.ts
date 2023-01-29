import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FicheRoutingModule } from './fiche-routing.module';
import { FicheComponent } from './fiche.component';
import { ListeFicheComponent } from './liste-fiche/liste-fiche.component';
import { FichePaiementComponent } from './fiche-paiement/fiche-paiement.component';


@NgModule({
  declarations: [FicheComponent, ListeFicheComponent, FichePaiementComponent],
  imports: [
    CommonModule,
    FicheRoutingModule
  ]
})
export class FicheModule { }
