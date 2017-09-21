import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EntitiesSharedModule } from '../entities-shared.module';
import { CustomerSharedModule } from '../customer/customer-shared.module';

import { OrderSharedModule } from '../order/order-shared.module';
import { CustomerDemographicSharedModule } from '../customer-demographic/customer-demographic-shared.module';

import { CustomerComponent } from './customer.component';
import { CustomerUpSertComponent } from './customer-upsert.component';
import { CustomerDetailsComponent } from './customer-details.component';
import { CustomerService } from './customer.service';

@NgModule({
  imports: [
    CommonModule,
    EntitiesSharedModule,
    CustomerSharedModule,    
    OrderSharedModule,    
    CustomerDemographicSharedModule    
  ],
  declarations: [
    CustomerComponent,
    CustomerUpSertComponent,
    CustomerDetailsComponent
  ],
  providers: [ CustomerService ]
})
export class CustomerModule { }
