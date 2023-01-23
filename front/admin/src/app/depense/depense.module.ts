import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { DepenseRoutingModule } from './depense-routing.module';
import { DepenseComponent } from './depense.component';
import { AjoutDepenseComponent } from './ajout-depense/ajout-depense.component';


@NgModule({
  declarations: [DepenseComponent, AjoutDepenseComponent],
  imports: [
    CommonModule,
    DepenseRoutingModule,
    ReactiveFormsModule,
  ],
})
export class DepenseModule { }
