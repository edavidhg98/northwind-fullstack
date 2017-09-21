import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EntitiesSharedModule } from '../entities-shared.module';
import { RegionSharedModule } from '../region/region-shared.module';

import { TerritorySharedModule } from '../territory/territory-shared.module';

import { RegionComponent } from './region.component';
import { RegionUpSertComponent } from './region-upsert.component';
import { RegionDetailsComponent } from './region-details.component';
import { RegionService } from './region.service';

@NgModule({
  imports: [
    CommonModule,
    EntitiesSharedModule,
    RegionSharedModule,    
    TerritorySharedModule    
  ],
  declarations: [
    RegionComponent,
    RegionUpSertComponent,
    RegionDetailsComponent
  ],
  providers: [ RegionService ]
})
export class RegionModule { }
