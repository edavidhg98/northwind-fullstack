import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EntitiesSharedModule } from '../entities-shared.module';

import { ProductListComponent } from './product-list.component';

@NgModule({
  imports: [
    CommonModule,
    EntitiesSharedModule
  ],
  exports: [
    ProductListComponent
  ],
  declarations: [
    ProductListComponent
  ],
  providers: []
})
export class ProductSharedModule { }
