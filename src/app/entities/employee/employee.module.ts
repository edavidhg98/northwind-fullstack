import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EntitiesSharedModule } from '../entities-shared.module';
import { EmployeeSharedModule } from '../employee/employee-shared.module';

import { OrderSharedModule } from '../order/order-shared.module';
import { TerritorySharedModule } from '../territory/territory-shared.module';

import { EmployeeComponent } from './employee.component';
import { EmployeeUpSertComponent } from './employee-upsert.component';
import { EmployeeDetailsComponent } from './employee-details.component';
import { EmployeeService } from './employee.service';

@NgModule({
  imports: [
    CommonModule,
    EntitiesSharedModule,
    EmployeeSharedModule,    
    OrderSharedModule,    
    TerritorySharedModule    
  ],
  declarations: [
    EmployeeComponent,
    EmployeeUpSertComponent,
    EmployeeDetailsComponent
  ],
  providers: [ EmployeeService ]
})
export class EmployeeModule { }
