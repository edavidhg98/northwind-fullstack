import { Routes } from '@angular/router';

import { ShipperComponent } from './shipper.component';
import { ShipperUpSertComponent } from './shipper-upsert.component';
import { ShipperDetailsComponent } from './shipper-details.component';

export const shipperRoutes: Routes = [
  {
    path: 'shipper',
    children: [
      { path: '', component: ShipperComponent },
      { path: 'create', component: ShipperUpSertComponent },
      { path: ':id', component: ShipperDetailsComponent },
      { path: ':id/update', component: ShipperUpSertComponent }
    ]
  }
];

export const absolutePath = '/entities/shipper/';
