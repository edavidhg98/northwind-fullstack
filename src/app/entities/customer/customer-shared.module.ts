import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EntitiesSharedModule } from '../entities-shared.module';

import { CustomerListComponent } from './customer-list.component';

@NgModule({
  imports: [
    CommonModule,
    EntitiesSharedModule
  ],
  exports: [
    CustomerListComponent
  ],
  declarations: [
    CustomerListComponent
  ],
  providers: []
})
export class CustomerSharedModule { }
