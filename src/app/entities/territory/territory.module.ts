import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EntitiesSharedModule } from '../entities-shared.module';
import { TerritorySharedModule } from '../territory/territory-shared.module';

import { EmployeeSharedModule } from '../employee/employee-shared.module';

import { TerritoryComponent } from './territory.component';
import { TerritoryUpSertComponent } from './territory-upsert.component';
import { TerritoryDetailsComponent } from './territory-details.component';
import { TerritoryService } from './territory.service';

@NgModule({
  imports: [
    CommonModule,
    EntitiesSharedModule,
    TerritorySharedModule,    
    EmployeeSharedModule    
  ],
  declarations: [
    TerritoryComponent,
    TerritoryUpSertComponent,
    TerritoryDetailsComponent
  ],
  providers: [ TerritoryService ]
})
export class TerritoryModule { }
