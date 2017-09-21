import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { CustomerDemographicService } from './customer-demographic.service';
import { CustomerDemographic } from './customer-demographic.model';


@Component({
  selector: 'app-customer-demographic-upsert',
  templateUrl: './customer-demographic-upsert.component.html'
})
export class CustomerDemographicUpSertComponent implements OnInit {

  crudOperationTitle = 'Crear';
  isCreate = true;
  customerDemographic: CustomerDemographic;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private customerDemographicService: CustomerDemographicService,
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const id = params['id'];
      if (id) {
        this.crudOperationTitle = 'Actualizar';
        this.isCreate = false;
        this.customerDemographicService.getById(id).subscribe(customerDemographic => this.customerDemographic = customerDemographic);
      }
    });
  }

  save(formValues) {
    this.customerDemographic = formValues;
    this.customerDemographicService.insert(this.customerDemographic).subscribe(
      (response) => {
        this.router.navigate(['/entities/customer-demographic']);
      }
    );
  }

  update() {
    this.customerDemographicService.update(this.customerDemographic._id, this.customerDemographic).subscribe(
      (response) => {
        this.router.navigate(['/entities/customer-demographic']);
      }
    );
  }
}
