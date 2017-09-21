import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Employee } from './employee.model';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html'
})
export class EmployeeDetailsComponent implements OnInit {

  employee: Employee;

    constructor(
      private employeeService: EmployeeService,
      private route: ActivatedRoute
    ) {

    }

    ngOnInit() {
      this.route.params.subscribe(params => {
        const id = params['id'];
        this.employeeService.getById(id).subscribe(employee => this.employee = employee);
      });
    }
  }
