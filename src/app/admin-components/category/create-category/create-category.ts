import { Router, RouterModule } from '@angular/router';
import { Component, inject } from '@angular/core';
import { CategoryService } from '../../../services/category-service';
import { CreateCategoryModel } from '../../../models/categoryModels/createCategoryModel';

@Component({
  selector: 'app-create-category',
  standalone: false,
  templateUrl: './create-category.html',
  styleUrl: './create-category.css',
})
export class CreateCategory {
  private categoryService = inject(CategoryService);
  private router = inject(Router);
  category: CreateCategoryModel = new CreateCategoryModel();

  create() {
    this.categoryService.create(this.category).subscribe({
      next: (data) => {
        this.router.navigate(['/admin/category']);
      },
      error: (err) => console.log(err),
    });
  }
}
