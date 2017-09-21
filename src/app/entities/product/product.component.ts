import { Component, OnInit, Inject } from '@angular/core';

import { ProductService } from './product.service';
import { Product } from './product.model';

@Component({
  selector: 'app-product',
  template: `
              <div class="container-fluid">
                <app-product-list [products]="products"></app-product-list>
              </div>
            `
})
export class ProductComponent implements OnInit {

  products: Product[] = [];

  constructor(private productService: ProductService) {

  }

  ngOnInit() {
    this.productService.getAll().subscribe(products => this.products = products);
  }
}
