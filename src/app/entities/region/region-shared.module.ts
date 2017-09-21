import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EntitiesSharedModule } from '../entities-shared.module';

import { RegionListComponent } from './region-list.component';

@NgModule({
  imports: [
    CommonModule,
    EntitiesSharedModule
  ],
  exports: [
    RegionListComponent
  ],
  declarations: [
    RegionListComponent
  ],
  providers: []
})
export class RegionSharedModule { }
