import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EntitiesSharedModule } from '../entities-shared.module';
import { CategorySharedModule } from '../category/category-shared.module';

import { ProductSharedModule } from '../product/product-shared.module';

import { CategoryComponent } from './category.component';
import { CategoryUpSertComponent } from './category-upsert.component';
import { CategoryDetailsComponent } from './category-details.component';
import { CategoryService } from './category.service';

@NgModule({
  imports: [
    CommonModule,
    EntitiesSharedModule,
    CategorySharedModule,    
    ProductSharedModule    
  ],
  declarations: [
    CategoryComponent,
    CategoryUpSertComponent,
    CategoryDetailsComponent
  ],
  providers: [ CategoryService ]
})
export class CategoryModule { }
