import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EntitiesSharedModule } from '../entities-shared.module';
import { OrderDetailSharedModule } from '../order-detail/order-detail-shared.module';


import { OrderDetailComponent } from './order-detail.component';
import { OrderDetailUpSertComponent } from './order-detail-upsert.component';
import { OrderDetailDetailsComponent } from './order-detail-details.component';
import { OrderDetailService } from './order-detail.service';

@NgModule({
  imports: [
    CommonModule,
    EntitiesSharedModule,
    OrderDetailSharedModule    
  ],
  declarations: [
    OrderDetailComponent,
    OrderDetailUpSertComponent,
    OrderDetailDetailsComponent
  ],
  providers: [ OrderDetailService ]
})
export class OrderDetailModule { }
