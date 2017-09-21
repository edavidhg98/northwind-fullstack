import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EntitiesSharedModule } from '../entities-shared.module';

import { EmployeeListComponent } from './employee-list.component';

@NgModule({
  imports: [
    CommonModule,
    EntitiesSharedModule
  ],
  exports: [
    EmployeeListComponent
  ],
  declarations: [
    EmployeeListComponent
  ],
  providers: []
})
export class EmployeeSharedModule { }
