import { Component, OnInit, Inject } from '@angular/core';

import { SupplierService } from './supplier.service';
import { Supplier } from './supplier.model';

@Component({
  selector: 'app-supplier',
  template: `
              <div class="container-fluid">
                <app-supplier-list [suppliers]="suppliers"></app-supplier-list>
              </div>
            `
})
export class SupplierComponent implements OnInit {

  suppliers: Supplier[] = [];

  constructor(private supplierService: SupplierService) {

  }

  ngOnInit() {
    this.supplierService.getAll().subscribe(suppliers => this.suppliers = suppliers);
  }
}
