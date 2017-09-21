import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { EmployeeService } from './employee.service';
import { Employee } from './employee.model';


@Component({
  selector: 'app-employee-upsert',
  templateUrl: './employee-upsert.component.html'
})
export class EmployeeUpSertComponent implements OnInit {

  crudOperationTitle = 'Crear';
  isCreate = true;
  employee: Employee;
  employees: Employee[];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private employeeService: EmployeeService,
  ) { }

  ngOnInit() {
    this.employeeService.getAll().subscribe(employees => this.employees = employees);
    this.route.params.subscribe((params) => {
      const id = params['id'];
      if (id) {
        this.crudOperationTitle = 'Actualizar';
        this.isCreate = false;
        this.employeeService.getById(id).subscribe(employee => this.employee = employee);
      }
    });
  }

  save(formValues) {
    this.employee = formValues;
    this.employeeService.insert(this.employee).subscribe(
      (response) => {
        this.router.navigate(['/entities/employee']);
      }
    );
  }

  update() {
    this.employeeService.update(this.employee._id, this.employee).subscribe(
      (response) => {
        this.router.navigate(['/entities/employee']);
      }
    );
  }
}
