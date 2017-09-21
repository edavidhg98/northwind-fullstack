import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EntitiesSharedModule } from '../entities-shared.module';

import { CategoryListComponent } from './category-list.component';

@NgModule({
  imports: [
    CommonModule,
    EntitiesSharedModule
  ],
  exports: [
    CategoryListComponent
  ],
  declarations: [
    CategoryListComponent
  ],
  providers: []
})
export class CategorySharedModule { }
