import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FicheComponent } from './fiche.component';
import { ListeFicheComponent } from './liste-fiche/liste-fiche.component';

const routes: Routes = [{ path: '', component: ListeFicheComponent },
  { path: 'liste-fiche', component: ListeFicheComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FicheRoutingModule { }
