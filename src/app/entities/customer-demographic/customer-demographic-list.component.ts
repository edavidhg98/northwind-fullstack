import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { CustomerDemographicService } from './customer-demographic.service';
import { CustomerDemographic } from './customer-demographic.model';
import { absolutePath } from './customer-demographic.route';

@Component({
  selector: 'app-customer-demographic-list',
  templateUrl: './customer-demographic-list.component.html'
})
export class CustomerDemographicListComponent implements OnInit {

  deleteModalOpts = { ok: 'OK', cancel: 'CANCEL' };
  absolutePath: string = absolutePath;

  @Input() customerDemographics: CustomerDemographic[];

  // Necesarios para el ordernamiento
  isDesc = false;
  column: string;
  direction: number;

  constructor(
    private customerDemographicService: CustomerDemographicService,
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
        this.customerDemographicService.delete(id).subscribe(response => {
          this.customerDemographics = this.customerDemographics.filter(customerDemographic => customerDemographic._id !== id);
        });
      }
    }, (reason) => {});
  }
}
