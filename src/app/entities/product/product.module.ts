import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EntitiesSharedModule } from '../entities-shared.module';
import { ProductSharedModule } from '../product/product-shared.module';

import { OrderDetailSharedModule } from '../order-detail/order-detail-shared.module';

import { ProductComponent } from './product.component';
import { ProductUpSertComponent } from './product-upsert.component';
import { ProductDetailsComponent } from './product-details.component';
import { ProductService } from './product.service';

@NgModule({
  imports: [
    CommonModule,
    EntitiesSharedModule,
    ProductSharedModule,    
    OrderDetailSharedModule    
  ],
  declarations: [
    ProductComponent,
    ProductUpSertComponent,
    ProductDetailsComponent
  ],
  providers: [ ProductService ]
})
export class ProductModule { }
