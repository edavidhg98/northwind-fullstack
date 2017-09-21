import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { OrderDetailService } from './order-detail.service';
import { OrderDetail } from './order-detail.model';
import { absolutePath } from './order-detail.route';

@Component({
  selector: 'app-order-detail-list',
  templateUrl: './order-detail-list.component.html'
})
export class OrderDetailListComponent implements OnInit {

  deleteModalOpts = { ok: 'OK', cancel: 'CANCEL' };
  absolutePath: string = absolutePath;

  @Input() orderDetails: OrderDetail[];

  // Necesarios para el ordernamiento
  isDesc = false;
  column: string;
  direction: number;

  constructor(
    private orderDetailService: OrderDetailService,
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
        this.orderDetailService.delete(id).subscribe(response => {
          this.orderDetails = this.orderDetails.filter(orderDetail => orderDetail._id !== id);
        });
      }
    }, (reason) => {});
  }
}
