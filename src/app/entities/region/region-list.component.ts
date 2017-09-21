import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { RegionService } from './region.service';
import { Region } from './region.model';
import { absolutePath } from './region.route';

@Component({
  selector: 'app-region-list',
  templateUrl: './region-list.component.html'
})
export class RegionListComponent implements OnInit {

  deleteModalOpts = { ok: 'OK', cancel: 'CANCEL' };
  absolutePath: string = absolutePath;

  @Input() regions: Region[];

  // Necesarios para el ordernamiento
  isDesc = false;
  column: string;
  direction: number;

  constructor(
    private regionService: RegionService,
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
        this.regionService.delete(id).subscribe(response => {
          this.regions = this.regions.filter(region => region._id !== id);
        });
      }
    }, (reason) => {});
  }
}
