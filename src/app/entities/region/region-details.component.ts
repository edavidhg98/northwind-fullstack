import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Region } from './region.model';
import { RegionService } from './region.service';

@Component({
  selector: 'app-region-details',
  templateUrl: './region-details.component.html'
})
export class RegionDetailsComponent implements OnInit {

  region: Region;

    constructor(
      private regionService: RegionService,
      private route: ActivatedRoute
    ) {

    }

    ngOnInit() {
      this.route.params.subscribe(params => {
        const id = params['id'];
        this.regionService.getById(id).subscribe(region => this.region = region);
      });
    }
  }
