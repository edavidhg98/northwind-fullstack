import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EntitiesSharedModule } from '../entities-shared.module';

import { CustomerDemographicListComponent } from './customer-demographic-list.component';

@NgModule({
  imports: [
    CommonModule,
    EntitiesSharedModule
  ],
  exports: [
    CustomerDemographicListComponent
  ],
  declarations: [
    CustomerDemographicListComponent
  ],
  providers: []
})
export class CustomerDemographicSharedModule { }
