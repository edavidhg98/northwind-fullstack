import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Supplier } from './supplier.model';
import { SupplierService } from './supplier.service';

@Component({
  selector: 'app-supplier-details',
  templateUrl: './supplier-details.component.html'
})
export class SupplierDetailsComponent implements OnInit {

  supplier: Supplier;

    constructor(
      private supplierService: SupplierService,
      private route: ActivatedRoute
    ) {

    }

    ngOnInit() {
      this.route.params.subscribe(params => {
        const id = params['id'];
        this.supplierService.getById(id).subscribe(supplier => this.supplier = supplier);
      });
    }
  }
