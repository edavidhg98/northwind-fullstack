import { Routes } from '@angular/router';

import { TerritoryComponent } from './territory.component';
import { TerritoryUpSertComponent } from './territory-upsert.component';
import { TerritoryDetailsComponent } from './territory-details.component';

export const territoryRoutes: Routes = [
  {
    path: 'territory',
    children: [
      { path: '', component: TerritoryComponent },
      { path: 'create', component: TerritoryUpSertComponent },
      { path: ':id', component: TerritoryDetailsComponent },
      { path: ':id/update', component: TerritoryUpSertComponent }
    ]
  }
];

export const absolutePath = '/entities/territory/';
