import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { TerritoryService } from './territory.service';
import { Territory } from './territory.model';

import { RegionService } from '../region/region.service';
import { Region } from '../region/region.model';

@Component({
  selector: 'app-territory-upsert',
  templateUrl: './territory-upsert.component.html'
})
export class TerritoryUpSertComponent implements OnInit {

  crudOperationTitle = 'Crear';
  isCreate = true;
  territory: Territory;
  regions: Region[];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private territoryService: TerritoryService,
    private regionService: RegionService,
  ) { }

  ngOnInit() {
    this.regionService.getAll().subscribe(regions => this.regions = regions);
    this.route.params.subscribe((params) => {
      const id = params['id'];
      if (id) {
        this.crudOperationTitle = 'Actualizar';
        this.isCreate = false;
        this.territoryService.getById(id).subscribe(territory => this.territory = territory);
      }
    });
  }

  save(formValues) {
    this.territory = formValues;
    this.territoryService.insert(this.territory).subscribe(
      (response) => {
        this.router.navigate(['/entities/territory']);
      }
    );
  }

  update() {
    this.territoryService.update(this.territory._id, this.territory).subscribe(
      (response) => {
        this.router.navigate(['/entities/territory']);
      }
    );
  }
}
