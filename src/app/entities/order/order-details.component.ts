import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Order } from './order.model';
import { OrderService } from './order.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html'
})
export class OrderDetailsComponent implements OnInit {

  order: Order;

    constructor(
      private orderService: OrderService,
      private route: ActivatedRoute
    ) {

    }

    ngOnInit() {
      this.route.params.subscribe(params => {
        const id = params['id'];
        this.orderService.getById(id).subscribe(order => this.order = order);
      });
    }
  }
