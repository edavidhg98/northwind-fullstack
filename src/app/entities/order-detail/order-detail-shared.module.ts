import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EntitiesSharedModule } from '../entities-shared.module';

import { OrderDetailListComponent } from './order-detail-list.component';

@NgModule({
  imports: [
    CommonModule,
    EntitiesSharedModule
  ],
  exports: [
    OrderDetailListComponent
  ],
  declarations: [
    OrderDetailListComponent
  ],
  providers: []
})
export class OrderDetailSharedModule { }
