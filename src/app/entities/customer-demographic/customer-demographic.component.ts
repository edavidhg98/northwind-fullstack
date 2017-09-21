import { Component, OnInit, Inject } from '@angular/core';

import { CustomerDemographicService } from './customer-demographic.service';
import { CustomerDemographic } from './customer-demographic.model';

@Component({
  selector: 'app-customer-demographic',
  template: `
              <div class="container-fluid">
                <app-customer-demographic-list [customerDemographics]="customerDemographics"></app-customer-demographic-list>
              </div>
            `
})
export class CustomerDemographicComponent implements OnInit {

  customerDemographics: CustomerDemographic[] = [];

  constructor(private customerDemographicService: CustomerDemographicService) {

  }

  ngOnInit() {
    this.customerDemographicService.getAll().subscribe(customerDemographics => this.customerDemographics = customerDemographics);
  }
}
