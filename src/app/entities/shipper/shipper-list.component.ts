import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { ShipperService } from './shipper.service';
import { Shipper } from './shipper.model';
import { absolutePath } from './shipper.route';

@Component({
  selector: 'app-shipper-list',
  templateUrl: './shipper-list.component.html'
})
export class ShipperListComponent implements OnInit {

  deleteModalOpts = { ok: 'OK', cancel: 'CANCEL' };
  absolutePath: string = absolutePath;

  @Input() shippers: Shipper[];

  // Necesarios para el ordernamiento
  isDesc = false;
  column: string;
  direction: number;

  constructor(
    private shipperService: ShipperService,
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
        this.shipperService.delete(id).subscribe(response => {
          this.shippers = this.shippers.filter(shipper => shipper._id !== id);
        });
      }
    }, (reason) => {});
  }
}
