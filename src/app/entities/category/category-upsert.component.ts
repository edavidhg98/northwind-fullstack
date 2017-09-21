import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { CategoryService } from './category.service';
import { Category } from './category.model';


@Component({
  selector: 'app-category-upsert',
  templateUrl: './category-upsert.component.html'
})
export class CategoryUpSertComponent implements OnInit {

  crudOperationTitle = 'Crear';
  isCreate = true;
  category: Category;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private categoryService: CategoryService,
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const id = params['id'];
      if (id) {
        this.crudOperationTitle = 'Actualizar';
        this.isCreate = false;
        this.categoryService.getById(id).subscribe(category => this.category = category);
      }
    });
  }

  save(formValues) {
    this.category = formValues;
    this.categoryService.insert(this.category).subscribe(
      (response) => {
        this.router.navigate(['/entities/category']);
      }
    );
  }

  update() {
    this.categoryService.update(this.category._id, this.category).subscribe(
      (response) => {
        this.router.navigate(['/entities/category']);
      }
    );
  }
}
