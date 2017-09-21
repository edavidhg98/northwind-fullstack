import { Routes } from '@angular/router';

import { CustomerDemographicComponent } from './customer-demographic.component';
import { CustomerDemographicUpSertComponent } from './customer-demographic-upsert.component';
import { CustomerDemographicDetailsComponent } from './customer-demographic-details.component';

export const customerDemographicRoutes: Routes = [
  {
    path: 'customer-demographic',
    children: [
      { path: '', component: CustomerDemographicComponent },
      { path: 'create', component: CustomerDemographicUpSertComponent },
      { path: ':id', component: CustomerDemographicDetailsComponent },
      { path: ':id/update', component: CustomerDemographicUpSertComponent }
    ]
  }
];

export const absolutePath = '/entities/customer-demographic/';
