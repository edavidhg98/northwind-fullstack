import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { OrderDetailService } from './order-detail.service';
import { OrderDetail } from './order-detail.model';

import { OrderService } from '../order/order.service';
import { Order } from '../order/order.model';
import { ProductService } from '../product/product.service';
import { Product } from '../product/product.model';

@Component({
  selector: 'app-order-detail-upsert',
  templateUrl: './order-detail-upsert.component.html'
})
export class OrderDetailUpSertComponent implements OnInit {

  crudOperationTitle = 'Crear';
  isCreate = true;
  orderDetail: OrderDetail;
  orders: Order[];
  products: Product[];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private orderDetailService: OrderDetailService,
    private orderService: OrderService,
    private productService: ProductService,
  ) { }

  ngOnInit() {
    this.orderService.getAll().subscribe(orders => this.orders = orders);
    this.productService.getAll().subscribe(products => this.products = products);
    this.route.params.subscribe((params) => {
      const id = params['id'];
      if (id) {
        this.crudOperationTitle = 'Actualizar';
        this.isCreate = false;
        this.orderDetailService.getById(id).subscribe(orderDetail => this.orderDetail = orderDetail);
      }
    });
  }

  save(formValues) {
    this.orderDetail = formValues;
    this.orderDetailService.insert(this.orderDetail).subscribe(
      (response) => {
        this.router.navigate(['/entities/order-detail']);
      }
    );
  }

  update() {
    this.orderDetailService.update(this.orderDetail._id, this.orderDetail).subscribe(
      (response) => {
        this.router.navigate(['/entities/order-detail']);
      }
    );
  }
}
