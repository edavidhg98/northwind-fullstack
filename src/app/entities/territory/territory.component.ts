import { Component, OnInit, Inject } from '@angular/core';

import { TerritoryService } from './territory.service';
import { Territory } from './territory.model';

@Component({
  selector: 'app-territory',
  template: `
              <div class="container-fluid">
                <app-territory-list [territorys]="territorys"></app-territory-list>
              </div>
            `
})
export class TerritoryComponent implements OnInit {

  territorys: Territory[] = [];

  constructor(private territoryService: TerritoryService) {

  }

  ngOnInit() {
    this.territoryService.getAll().subscribe(territorys => this.territorys = territorys);
  }
}
