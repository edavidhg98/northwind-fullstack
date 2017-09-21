import { Routes } from '@angular/router';

import { CustomerComponent } from './customer.component';
import { CustomerUpSertComponent } from './customer-upsert.component';
import { CustomerDetailsComponent } from './customer-details.component';

export const customerRoutes: Routes = [
  {
    path: 'customer',
    children: [
      { path: '', component: CustomerComponent },
      { path: 'create', component: CustomerUpSertComponent },
      { path: ':id', component: CustomerDetailsComponent },
      { path: ':id/update', component: CustomerUpSertComponent }
    ]
  }
];

export const absolutePath = '/entities/customer/';
