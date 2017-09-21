import { Routes } from '@angular/router';

import { EmployeeComponent } from './employee.component';
import { EmployeeUpSertComponent } from './employee-upsert.component';
import { EmployeeDetailsComponent } from './employee-details.component';

export const employeeRoutes: Routes = [
  {
    path: 'employee',
    children: [
      { path: '', component: EmployeeComponent },
      { path: 'create', component: EmployeeUpSertComponent },
      { path: ':id', component: EmployeeDetailsComponent },
      { path: ':id/update', component: EmployeeUpSertComponent }
    ]
  }
];

export const absolutePath = '/entities/employee/';
