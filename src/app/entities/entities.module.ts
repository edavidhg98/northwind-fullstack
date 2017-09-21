import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryModule } from './category/category.module';
import { CustomerDemographicModule } from './customer-demographic/customer-demographic.module';
import { CustomerModule } from './customer/customer.module';
import { EmployeeModule } from './employee/employee.module';
import { OrderDetailModule } from './order-detail/order-detail.module';
import { OrderModule } from './order/order.module';
import { ProductModule } from './product/product.module';
import { RegionModule } from './region/region.module';
import { ShipperModule } from './shipper/shipper.module';
import { SupplierModule } from './supplier/supplier.module';
import { TerritoryModule } from './territory/territory.module';

@NgModule({
  imports: [
    CommonModule,
      CategoryModule, 
      CustomerDemographicModule, 
      CustomerModule, 
      EmployeeModule, 
      OrderDetailModule, 
      OrderModule, 
      ProductModule, 
      RegionModule, 
      ShipperModule, 
      SupplierModule, 
      TerritoryModule
  ]
})
export class EntitiesModule { }
