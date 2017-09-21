import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EntitiesSharedModule } from '../entities-shared.module';
import { OrderSharedModule } from '../order/order-shared.module';

import { OrderDetailSharedModule } from '../order-detail/order-detail-shared.module';

import { OrderComponent } from './order.component';
import { OrderUpSertComponent } from './order-upsert.component';
import { OrderDetailsComponent } from './order-details.component';
import { OrderService } from './order.service';

@NgModule({
  imports: [
    CommonModule,
    EntitiesSharedModule,
    OrderSharedModule,    
    OrderDetailSharedModule    
  ],
  declarations: [
    OrderComponent,
    OrderUpSertComponent,
    OrderDetailsComponent
  ],
  providers: [ OrderService ]
})
export class OrderModule { }
