import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EntitiesSharedModule } from '../entities-shared.module';

import { SupplierListComponent } from './supplier-list.component';

@NgModule({
  imports: [
    CommonModule,
    EntitiesSharedModule
  ],
  exports: [
    SupplierListComponent
  ],
  declarations: [
    SupplierListComponent
  ],
  providers: []
})
export class SupplierSharedModule { }
