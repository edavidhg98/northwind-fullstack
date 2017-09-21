import { Routes } from '@angular/router';

import { RegionComponent } from './region.component';
import { RegionUpSertComponent } from './region-upsert.component';
import { RegionDetailsComponent } from './region-details.component';

export const regionRoutes: Routes = [
  {
    path: 'region',
    children: [
      { path: '', component: RegionComponent },
      { path: 'create', component: RegionUpSertComponent },
      { path: ':id', component: RegionDetailsComponent },
      { path: ':id/update', component: RegionUpSertComponent }
    ]
  }
];

export const absolutePath = '/entities/region/';
