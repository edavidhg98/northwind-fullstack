import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Territory } from './territory.model';
import { TerritoryService } from './territory.service';

@Component({
  selector: 'app-territory-details',
  templateUrl: './territory-details.component.html'
})
export class TerritoryDetailsComponent implements OnInit {

  territory: Territory;

    constructor(
      private territoryService: TerritoryService,
      private route: ActivatedRoute
    ) {

    }

    ngOnInit() {
      this.route.params.subscribe(params => {
        const id = params['id'];
        this.territoryService.getById(id).subscribe(territory => this.territory = territory);
      });
    }
  }
