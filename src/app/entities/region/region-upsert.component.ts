import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { RegionService } from './region.service';
import { Region } from './region.model';


@Component({
  selector: 'app-region-upsert',
  templateUrl: './region-upsert.component.html'
})
export class RegionUpSertComponent implements OnInit {

  crudOperationTitle = 'Crear';
  isCreate = true;
  region: Region;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private regionService: RegionService,
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const id = params['id'];
      if (id) {
        this.crudOperationTitle = 'Actualizar';
        this.isCreate = false;
        this.regionService.getById(id).subscribe(region => this.region = region);
      }
    });
  }

  save(formValues) {
    this.region = formValues;
    this.regionService.insert(this.region).subscribe(
      (response) => {
        this.router.navigate(['/entities/region']);
      }
    );
  }

  update() {
    this.regionService.update(this.region._id, this.region).subscribe(
      (response) => {
        this.router.navigate(['/entities/region']);
      }
    );
  }
}
