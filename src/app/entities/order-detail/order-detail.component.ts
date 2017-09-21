import { Component, OnInit, Inject } from '@angular/core';

import { OrderDetailService } from './order-detail.service';
import { OrderDetail } from './order-detail.model';

@Component({
  selector: 'app-order-detail',
  template: `
              <div class="container-fluid">
                <app-order-detail-list [orderDetails]="orderDetails"></app-order-detail-list>
              </div>
            `
})
export class OrderDetailComponent implements OnInit {

  orderDetails: OrderDetail[] = [];

  constructor(private orderDetailService: OrderDetailService) {

  }

  ngOnInit() {
    this.orderDetailService.getAll().subscribe(orderDetails => this.orderDetails = orderDetails);
  }
}
