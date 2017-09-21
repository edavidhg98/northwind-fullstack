import { Routes } from '@angular/router';

import { categoryRoutes } from './category/category.route';
import { customerDemographicRoutes } from './customer-demographic/customer-demographic.route';
import { customerRoutes } from './customer/customer.route';
import { employeeRoutes } from './employee/employee.route';
import { orderDetailRoutes } from './order-detail/order-detail.route';
import { orderRoutes } from './order/order.route';
import { productRoutes } from './product/product.route';
import { regionRoutes } from './region/region.route';
import { shipperRoutes } from './shipper/shipper.route';
import { supplierRoutes } from './supplier/supplier.route';
import { territoryRoutes } from './territory/territory.route';

export const entitiesRoutes: Routes = [
  {
    path: 'entities',
    children: [
      ...categoryRoutes,
      ...customerDemographicRoutes,
      ...customerRoutes,
      ...employeeRoutes,
      ...orderDetailRoutes,
      ...orderRoutes,
      ...productRoutes,
      ...regionRoutes,
      ...shipperRoutes,
      ...supplierRoutes,
      ...territoryRoutes
    ]
  }
];
