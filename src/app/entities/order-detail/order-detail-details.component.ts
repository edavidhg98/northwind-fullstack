import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { OrderDetail } from './order-detail.model';
import { OrderDetailService } from './order-detail.service';

@Component({
  selector: 'app-order-detail-details',
  templateUrl: './order-detail-details.component.html'
})
export class OrderDetailDetailsComponent implements OnInit {

  orderDetail: OrderDetail;

    constructor(
      private orderDetailService: OrderDetailService,
      private route: ActivatedRoute
    ) {

    }

    ngOnInit() {
      this.route.params.subscribe(params => {
        const id = params['id'];
        this.orderDetailService.getById(id).subscribe(orderDetail => this.orderDetail = orderDetail);
      });
    }
  }
