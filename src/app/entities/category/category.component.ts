import { Component, OnInit, Inject } from '@angular/core';

import { CategoryService } from './category.service';
import { Category } from './category.model';

@Component({
  selector: 'app-category',
  template: `
              <div class="container-fluid">
                <app-category-list [categorys]="categorys"></app-category-list>
              </div>
            `
})
export class CategoryComponent implements OnInit {

  categorys: Category[] = [];

  constructor(private categoryService: CategoryService) {

  }

  ngOnInit() {
    this.categoryService.getAll().subscribe(categorys => this.categorys = categorys);
  }
}
