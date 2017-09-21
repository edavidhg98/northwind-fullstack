import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EntitiesSharedModule } from '../entities-shared.module';
import { SupplierSharedModule } from '../supplier/supplier-shared.module';

import { ProductSharedModule } from '../product/product-shared.module';

import { SupplierComponent } from './supplier.component';
import { SupplierUpSertComponent } from './supplier-upsert.component';
import { SupplierDetailsComponent } from './supplier-details.component';
import { SupplierService } from './supplier.service';

@NgModule({
  imports: [
    CommonModule,
    EntitiesSharedModule,
    SupplierSharedModule,    
    ProductSharedModule    
  ],
  declarations: [
    SupplierComponent,
    SupplierUpSertComponent,
    SupplierDetailsComponent
  ],
  providers: [ SupplierService ]
})
export class SupplierModule { }
