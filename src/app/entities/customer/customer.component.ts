import { Component, OnInit, Inject } from '@angular/core';

import { CustomerService } from './customer.service';
import { Customer } from './customer.model';

@Component({
  selector: 'app-customer',
  template: `
              <div class="container-fluid">
                <app-customer-list [customers]="customers"></app-customer-list>
              </div>
            `
})
export class CustomerComponent implements OnInit {

  customers: Customer[] = [];

  constructor(private customerService: CustomerService) {

  }

  ngOnInit() {
    this.customerService.getAll().subscribe(customers => this.customers = customers);
  }
}
