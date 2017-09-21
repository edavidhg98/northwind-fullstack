import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { CustomerService } from './customer.service';
import { Customer } from './customer.model';
import { absolutePath } from './customer.route';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html'
})
export class CustomerListComponent implements OnInit {

  deleteModalOpts = { ok: 'OK', cancel: 'CANCEL' };
  absolutePath: string = absolutePath;

  @Input() customers: Customer[];

  // Necesarios para el ordernamiento
  isDesc = false;
  column: string;
  direction: number;

  constructor(
    private customerService: CustomerService,
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
        this.customerService.delete(id).subscribe(response => {
          this.customers = this.customers.filter(customer => customer._id !== id);
        });
      }
    }, (reason) => {});
  }
}
