import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ProductService } from './product.service';
import { Product } from './product.model';

import { CategoryService } from '../category/category.service';
import { Category } from '../category/category.model';
import { SupplierService } from '../supplier/supplier.service';
import { Supplier } from '../supplier/supplier.model';

@Component({
  selector: 'app-product-upsert',
  templateUrl: './product-upsert.component.html'
})
export class ProductUpSertComponent implements OnInit {

  crudOperationTitle = 'Crear';
  isCreate = true;
  product: Product;
  categorys: Category[];
  suppliers: Supplier[];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private productService: ProductService,
    private categoryService: CategoryService,
    private supplierService: SupplierService,
  ) { }

  ngOnInit() {
    this.categoryService.getAll().subscribe(categorys => this.categorys = categorys);
    this.supplierService.getAll().subscribe(suppliers => this.suppliers = suppliers);
    this.route.params.subscribe((params) => {
      const id = params['id'];
      if (id) {
        this.crudOperationTitle = 'Actualizar';
        this.isCreate = false;
        this.productService.getById(id).subscribe(product => this.product = product);
      }
    });
  }

  save(formValues) {
    this.product = formValues;
    this.productService.insert(this.product).subscribe(
      (response) => {
        this.router.navigate(['/entities/product']);
      }
    );
  }

  update() {
    this.productService.update(this.product._id, this.product).subscribe(
      (response) => {
        this.router.navigate(['/entities/product']);
      }
    );
  }
}
