import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DepenseComponent } from './depense.component';
import { AjoutDepenseComponent } from './ajout-depense/ajout-depense.component';

const routes: Routes = [{ path: '', component: DepenseComponent }, { path: 'ajout', component: AjoutDepenseComponent },
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DepenseRoutingModule { }
