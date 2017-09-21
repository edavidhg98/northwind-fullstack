import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { CustomerService } from './customer.service';
import { Customer } from './customer.model';


@Component({
  selector: 'app-customer-upsert',
  templateUrl: './customer-upsert.component.html'
})
export class CustomerUpSertComponent implements OnInit {

  crudOperationTitle = 'Crear';
  isCreate = true;
  customer: Customer;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private customerService: CustomerService,
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const id = params['id'];
      if (id) {
        this.crudOperationTitle = 'Actualizar';
        this.isCreate = false;
        this.customerService.getById(id).subscribe(customer => this.customer = customer);
      }
    });
  }

  save(formValues) {
    this.customer = formValues;
    this.customerService.insert(this.customer).subscribe(
      (response) => {
        this.router.navigate(['/entities/customer']);
      }
    );
  }

  update() {
    this.customerService.update(this.customer._id, this.customer).subscribe(
      (response) => {
        this.router.navigate(['/entities/customer']);
      }
    );
  }
}
