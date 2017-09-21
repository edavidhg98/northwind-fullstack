import { Routes } from '@angular/router';

import { CategoryComponent } from './category.component';
import { CategoryUpSertComponent } from './category-upsert.component';
import { CategoryDetailsComponent } from './category-details.component';

export const categoryRoutes: Routes = [
  {
    path: 'category',
    children: [
      { path: '', component: CategoryComponent },
      { path: 'create', component: CategoryUpSertComponent },
      { path: ':id', component: CategoryDetailsComponent },
      { path: ':id/update', component: CategoryUpSertComponent }
    ]
  }
];

export const absolutePath = '/entities/category/';
