import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EntitiesSharedModule } from '../entities-shared.module';
import { CustomerDemographicSharedModule } from '../customer-demographic/customer-demographic-shared.module';

import { CustomerSharedModule } from '../customer/customer-shared.module';

import { CustomerDemographicComponent } from './customer-demographic.component';
import { CustomerDemographicUpSertComponent } from './customer-demographic-upsert.component';
import { CustomerDemographicDetailsComponent } from './customer-demographic-details.component';
import { CustomerDemographicService } from './customer-demographic.service';

@NgModule({
  imports: [
    CommonModule,
    EntitiesSharedModule,
    CustomerDemographicSharedModule,    
    CustomerSharedModule    
  ],
  declarations: [
    CustomerDemographicComponent,
    CustomerDemographicUpSertComponent,
    CustomerDemographicDetailsComponent
  ],
  providers: [ CustomerDemographicService ]
})
export class CustomerDemographicModule { }
