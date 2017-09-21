import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { ProductService } from './product.service';
import { Product } from './product.model';
import { absolutePath } from './product.route';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html'
})
export class ProductListComponent implements OnInit {

  deleteModalOpts = { ok: 'OK', cancel: 'CANCEL' };
  absolutePath: string = absolutePath;

  @Input() products: Product[];

  // Necesarios para el ordernamiento
  isDesc = false;
  column: string;
  direction: number;

  constructor(
    private productService: ProductService,
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
        this.productService.delete(id).subscribe(response => {
          this.products = this.products.filter(product => product._id !== id);
        });
      }
    }, (reason) => {});
  }
}
