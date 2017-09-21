import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CustomerDemographic } from './customer-demographic.model';
import { CustomerDemographicService } from './customer-demographic.service';

@Component({
  selector: 'app-customer-demographic-details',
  templateUrl: './customer-demographic-details.component.html'
})
export class CustomerDemographicDetailsComponent implements OnInit {

  customerDemographic: CustomerDemographic;

    constructor(
      private customerDemographicService: CustomerDemographicService,
      private route: ActivatedRoute
    ) {

    }

    ngOnInit() {
      this.route.params.subscribe(params => {
        const id = params['id'];
        this.customerDemographicService.getById(id).subscribe(customerDemographic => this.customerDemographic = customerDemographic);
      });
    }
  }
