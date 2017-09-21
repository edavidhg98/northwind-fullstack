import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { OrderService } from './order.service';
import { Order } from './order.model';

import { CustomerService } from '../customer/customer.service';
import { Customer } from '../customer/customer.model';
import { EmployeeService } from '../employee/employee.service';
import { Employee } from '../employee/employee.model';
import { ShipperService } from '../shipper/shipper.service';
import { Shipper } from '../shipper/shipper.model';

@Component({
  selector: 'app-order-upsert',
  templateUrl: './order-upsert.component.html'
})
export class OrderUpSertComponent implements OnInit {

  crudOperationTitle = 'Crear';
  isCreate = true;
  order: Order;
  customers: Customer[];
  employees: Employee[];
  shippers: Shipper[];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private orderService: OrderService,
    private customerService: CustomerService,
    private employeeService: EmployeeService,
    private shipperService: ShipperService,
  ) { }

  ngOnInit() {
    this.customerService.getAll().subscribe(customers => this.customers = customers);
    this.employeeService.getAll().subscribe(employees => this.employees = employees);
    this.shipperService.getAll().subscribe(shippers => this.shippers = shippers);
    this.route.params.subscribe((params) => {
      const id = params['id'];
      if (id) {
        this.crudOperationTitle = 'Actualizar';
        this.isCreate = false;
        this.orderService.getById(id).subscribe(order => this.order = order);
      }
    });
  }

  save(formValues) {
    this.order = formValues;
    this.orderService.insert(this.order).subscribe(
      (response) => {
        this.router.navigate(['/entities/order']);
      }
    );
  }

  update() {
    this.orderService.update(this.order._id, this.order).subscribe(
      (response) => {
        this.router.navigate(['/entities/order']);
      }
    );
  }
}
