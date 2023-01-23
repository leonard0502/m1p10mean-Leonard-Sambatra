import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepenseRoutingModule } from './depense-routing.module';
import { DepenseComponent } from './depense.component';
import { AjoutDepenseComponent } from './ajout-depense/ajout-depense.component';


@NgModule({
  declarations: [DepenseComponent, AjoutDepenseComponent],
  imports: [
    CommonModule,
    DepenseRoutingModule,
  ]
})
export class DepenseModule { }
