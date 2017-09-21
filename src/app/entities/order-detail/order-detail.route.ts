import { Routes } from '@angular/router';

import { OrderDetailComponent } from './order-detail.component';
import { OrderDetailUpSertComponent } from './order-detail-upsert.component';
import { OrderDetailDetailsComponent } from './order-detail-details.component';

export const orderDetailRoutes: Routes = [
  {
    path: 'order-detail',
    children: [
      { path: '', component: OrderDetailComponent },
      { path: 'create', component: OrderDetailUpSertComponent },
      { path: ':id', component: OrderDetailDetailsComponent },
      { path: ':id/update', component: OrderDetailUpSertComponent }
    ]
  }
];

export const absolutePath = '/entities/order-detail/';
