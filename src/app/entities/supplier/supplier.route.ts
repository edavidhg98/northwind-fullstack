import { Routes } from '@angular/router';

import { SupplierComponent } from './supplier.component';
import { SupplierUpSertComponent } from './supplier-upsert.component';
import { SupplierDetailsComponent } from './supplier-details.component';

export const supplierRoutes: Routes = [
  {
    path: 'supplier',
    children: [
      { path: '', component: SupplierComponent },
      { path: 'create', component: SupplierUpSertComponent },
      { path: ':id', component: SupplierDetailsComponent },
      { path: ':id/update', component: SupplierUpSertComponent }
    ]
  }
];

export const absolutePath = '/entities/supplier/';
