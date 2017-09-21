import { Routes } from '@angular/router';

import { ProductComponent } from './product.component';
import { ProductUpSertComponent } from './product-upsert.component';
import { ProductDetailsComponent } from './product-details.component';

export const productRoutes: Routes = [
  {
    path: 'product',
    children: [
      { path: '', component: ProductComponent },
      { path: 'create', component: ProductUpSertComponent },
      { path: ':id', component: ProductDetailsComponent },
      { path: ':id/update', component: ProductUpSertComponent }
    ]
  }
];

export const absolutePath = '/entities/product/';
