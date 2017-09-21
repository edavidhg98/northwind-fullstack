import { Component, OnInit, Inject } from '@angular/core';

import { ShipperService } from './shipper.service';
import { Shipper } from './shipper.model';

@Component({
  selector: 'app-shipper',
  template: `
              <div class="container-fluid">
                <app-shipper-list [shippers]="shippers"></app-shipper-list>
              </div>
            `
})
export class ShipperComponent implements OnInit {

  shippers: Shipper[] = [];

  constructor(private shipperService: ShipperService) {

  }

  ngOnInit() {
    this.shipperService.getAll().subscribe(shippers => this.shippers = shippers);
  }
}
