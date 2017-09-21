import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Shipper } from './shipper.model';
import { ShipperService } from './shipper.service';

@Component({
  selector: 'app-shipper-details',
  templateUrl: './shipper-details.component.html'
})
export class ShipperDetailsComponent implements OnInit {

  shipper: Shipper;

    constructor(
      private shipperService: ShipperService,
      private route: ActivatedRoute
    ) {

    }

    ngOnInit() {
      this.route.params.subscribe(params => {
        const id = params['id'];
        this.shipperService.getById(id).subscribe(shipper => this.shipper = shipper);
      });
    }
  }
