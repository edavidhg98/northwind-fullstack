import { Component, OnInit, Inject } from '@angular/core';

import { EmployeeService } from './employee.service';
import { Employee } from './employee.model';

@Component({
  selector: 'app-employee',
  template: `
              <div class="container-fluid">
                <app-employee-list [employees]="employees"></app-employee-list>
              </div>
            `
})
export class EmployeeComponent implements OnInit {

  employees: Employee[] = [];

  constructor(private employeeService: EmployeeService) {

  }

  ngOnInit() {
    this.employeeService.getAll().subscribe(employees => this.employees = employees);
  }
}
