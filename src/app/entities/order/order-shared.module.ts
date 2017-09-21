import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EntitiesSharedModule } from '../entities-shared.module';

import { OrderListComponent } from './order-list.component';

@NgModule({
  imports: [
    CommonModule,
    EntitiesSharedModule
  ],
  exports: [
    OrderListComponent
  ],
  declarations: [
    OrderListComponent
  ],
  providers: []
})
export class OrderSharedModule { }
