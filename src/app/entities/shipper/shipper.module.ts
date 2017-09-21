import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EntitiesSharedModule } from '../entities-shared.module';
import { ShipperSharedModule } from '../shipper/shipper-shared.module';

import { OrderSharedModule } from '../order/order-shared.module';

import { ShipperComponent } from './shipper.component';
import { ShipperUpSertComponent } from './shipper-upsert.component';
import { ShipperDetailsComponent } from './shipper-details.component';
import { ShipperService } from './shipper.service';

@NgModule({
  imports: [
    CommonModule,
    EntitiesSharedModule,
    ShipperSharedModule,    
    OrderSharedModule    
  ],
  declarations: [
    ShipperComponent,
    ShipperUpSertComponent,
    ShipperDetailsComponent
  ],
  providers: [ ShipperService ]
})
export class ShipperModule { }
