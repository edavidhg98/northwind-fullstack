import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { TerritoryService } from './territory.service';
import { Territory } from './territory.model';
import { absolutePath } from './territory.route';

@Component({
  selector: 'app-territory-list',
  templateUrl: './territory-list.component.html'
})
export class TerritoryListComponent implements OnInit {

  deleteModalOpts = { ok: 'OK', cancel: 'CANCEL' };
  absolutePath: string = absolutePath;

  @Input() territorys: Territory[];

  // Necesarios para el ordernamiento
  isDesc = false;
  column: string;
  direction: number;

  constructor(
    private territoryService: TerritoryService,
    private modalService: NgbModal
  ) {

  }

  ngOnInit() {
  }

  sort(property) {
    this.isDesc = !this.isDesc;
    this.column = property;
    this.direction = this.isDesc ? 1 : -1;
  }

  openDeleteModal(content: any, id: string) {
    this.modalService.open(content).result.then((option) => {
      if (option === this.deleteModalOpts.ok) {
        this.territoryService.delete(id).subscribe(response => {
          this.territorys = this.territorys.filter(territory => territory._id !== id);
        });
      }
    }, (reason) => {});
  }
}
