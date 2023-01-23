import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { DepenseRoutingModule } from './depense-routing.module';
import { DepenseComponent } from './depense.component';
import { AjoutDepenseComponent } from './ajout-depense/ajout-depense.component';
import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [DepenseComponent, AjoutDepenseComponent, TestComponent],
  imports: [
    CommonModule,
    DepenseRoutingModule,
    ReactiveFormsModule,
  ],
})
export class DepenseModule { }
