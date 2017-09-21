import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EntitiesSharedModule } from '../entities-shared.module';

import { ShipperListComponent } from './shipper-list.component';

@NgModule({
  imports: [
    CommonModule,
    EntitiesSharedModule
  ],
  exports: [
    ShipperListComponent
  ],
  declarations: [
    ShipperListComponent
  ],
  providers: []
})
export class ShipperSharedModule { }
