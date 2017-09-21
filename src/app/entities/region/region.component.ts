import { Component, OnInit, Inject } from '@angular/core';

import { RegionService } from './region.service';
import { Region } from './region.model';

@Component({
  selector: 'app-region',
  template: `
              <div class="container-fluid">
                <app-region-list [regions]="regions"></app-region-list>
              </div>
            `
})
export class RegionComponent implements OnInit {

  regions: Region[] = [];

  constructor(private regionService: RegionService) {

  }

  ngOnInit() {
    this.regionService.getAll().subscribe(regions => this.regions = regions);
  }
}
