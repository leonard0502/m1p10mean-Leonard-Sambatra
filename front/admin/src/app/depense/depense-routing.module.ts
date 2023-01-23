import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DepenseComponent } from './depense.component';
import { AjoutDepenseComponent } from './ajout-depense/ajout-depense.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [{ path: '', component: DepenseComponent }, { path: 'ajout', component: AjoutDepenseComponent }, { path: 'test', component: TestComponent }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DepenseRoutingModule { }
