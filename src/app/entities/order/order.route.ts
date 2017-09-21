import { Routes } from '@angular/router';

import { OrderComponent } from './order.component';
import { OrderUpSertComponent } from './order-upsert.component';
import { OrderDetailsComponent } from './order-details.component';

export const orderRoutes: Routes = [
  {
    path: 'order',
    children: [
      { path: '', component: OrderComponent },
      { path: 'create', component: OrderUpSertComponent },
      { path: ':id', component: OrderDetailsComponent },
      { path: ':id/update', component: OrderUpSertComponent }
    ]
  }
];

export const absolutePath = '/entities/order/';
