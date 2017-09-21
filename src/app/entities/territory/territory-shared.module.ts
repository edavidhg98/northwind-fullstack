import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EntitiesSharedModule } from '../entities-shared.module';

import { TerritoryListComponent } from './territory-list.component';

@NgModule({
  imports: [
    CommonModule,
    EntitiesSharedModule
  ],
  exports: [
    TerritoryListComponent
  ],
  declarations: [
    TerritoryListComponent
  ],
  providers: []
})
export class TerritorySharedModule { }
