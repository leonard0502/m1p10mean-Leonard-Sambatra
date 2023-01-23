import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepenseRoutingModule } from './depense-routing.module';
import { DepenseComponent } from './depense.component';
import { AjoutDepenseComponent } from './ajout-depense/ajout-depense.component';
import { FormsModule } from '@angular/forms';
import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [DepenseComponent, AjoutDepenseComponent, TestComponent],
  imports: [
    CommonModule,
    DepenseRoutingModule,
    FormsModule
  ]
})
export class DepenseModule { }
