import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { SupplierService } from './supplier.service';
import { Supplier } from './supplier.model';


@Component({
  selector: 'app-supplier-upsert',
  templateUrl: './supplier-upsert.component.html'
})
export class SupplierUpSertComponent implements OnInit {

  crudOperationTitle = 'Crear';
  isCreate = true;
  supplier: Supplier;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private supplierService: SupplierService,
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const id = params['id'];
      if (id) {
        this.crudOperationTitle = 'Actualizar';
        this.isCreate = false;
        this.supplierService.getById(id).subscribe(supplier => this.supplier = supplier);
      }
    });
  }

  save(formValues) {
    this.supplier = formValues;
    this.supplierService.insert(this.supplier).subscribe(
      (response) => {
        this.router.navigate(['/entities/supplier']);
      }
    );
  }

  update() {
    this.supplierService.update(this.supplier._id, this.supplier).subscribe(
      (response) => {
        this.router.navigate(['/entities/supplier']);
      }
    );
  }
}
