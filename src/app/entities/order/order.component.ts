import { Component, OnInit, Inject } from '@angular/core';

import { OrderService } from './order.service';
import { Order } from './order.model';

@Component({
  selector: 'app-order',
  template: `
              <div class="container-fluid">
                <app-order-list [orders]="orders"></app-order-list>
              </div>
            `
})
export class OrderComponent implements OnInit {

  orders: Order[] = [];

  constructor(private orderService: OrderService) {

  }

  ngOnInit() {
    this.orderService.getAll().subscribe(orders => this.orders = orders);
  }
}
