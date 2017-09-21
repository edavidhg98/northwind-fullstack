import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Category } from './category.model';
import { CategoryService } from './category.service';

@Component({
  selector: 'app-category-details',
  templateUrl: './category-details.component.html'
})
export class CategoryDetailsComponent implements OnInit {

  category: Category;

    constructor(
      private categoryService: CategoryService,
      private route: ActivatedRoute
    ) {

    }

    ngOnInit() {
      this.route.params.subscribe(params => {
        const id = params['id'];
        this.categoryService.getById(id).subscribe(category => this.category = category);
      });
    }
  }
