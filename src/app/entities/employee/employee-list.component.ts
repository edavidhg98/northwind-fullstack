import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { EmployeeService } from './employee.service';
import { Employee } from './employee.model';
import { absolutePath } from './employee.route';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html'
})
export class EmployeeListComponent implements OnInit {

  deleteModalOpts = { ok: 'OK', cancel: 'CANCEL' };
  absolutePath: string = absolutePath;

  @Input() employees: Employee[];

  // Necesarios para el ordernamiento
  isDesc = false;
  column: string;
  direction: number;

  constructor(
    private employeeService: EmployeeService,
    private modalService: NgbModal
  ) {

  }

  ngOnInit() {
  }

  sort(property) {
    this.isDesc = !this.isDesc;
    this.column = property;
    this.direction = this.isDesc ? 1 : -1;
  }

  openDeleteModal(content: any, id: string) {
    this.modalService.open(content).result.then((option) => {
      if (option === this.deleteModalOpts.ok) {
        this.employeeService.delete(id).subscribe(response => {
          this.employees = this.employees.filter(employee => employee._id !== id);
        });
      }
    }, (reason) => {});
  }
}
