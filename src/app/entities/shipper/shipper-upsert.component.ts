import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ShipperService } from './shipper.service';
import { Shipper } from './shipper.model';


@Component({
  selector: 'app-shipper-upsert',
  templateUrl: './shipper-upsert.component.html'
})
export class ShipperUpSertComponent implements OnInit {

  crudOperationTitle = 'Crear';
  isCreate = true;
  shipper: Shipper;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private shipperService: ShipperService,
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const id = params['id'];
      if (id) {
        this.crudOperationTitle = 'Actualizar';
        this.isCreate = false;
        this.shipperService.getById(id).subscribe(shipper => this.shipper = shipper);
      }
    });
  }

  save(formValues) {
    this.shipper = formValues;
    this.shipperService.insert(this.shipper).subscribe(
      (response) => {
        this.router.navigate(['/entities/shipper']);
      }
    );
  }

  update() {
    this.shipperService.update(this.shipper._id, this.shipper).subscribe(
      (response) => {
        this.router.navigate(['/entities/shipper']);
      }
    );
  }
}
