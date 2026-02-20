import { CategoryListModel } from './../../../models/categoryModels/categoryListModel';
import { Component, inject, numberAttribute } from '@angular/core';
import { CategoryService } from '../../../services/category-service';
import { ActivatedRoute, Router } from '@angular/router';
import { UpdateCategoryModel } from '../../../models/categoryModels/updateCategoryModel';
import { NotExpr } from '@angular/compiler';

@Component({
  selector: 'app-update-category',
  standalone: false,
  templateUrl: './update-category.html',
  styleUrl: './update-category.css',
})
export class UpdateCategory {
  private categoryService = inject(CategoryService);
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  category = {} as CategoryListModel;

  ngOnInit(): void {
    this.getCategoryIdFromUrl();
  }
  getCategoryIdFromUrl() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id > 0) {
      this.getById(id);
    }
  }

  getById(id: number) {
    this.categoryService.getById(id).subscribe({
      next: (response) => (this.category = response.data),
      error: (err) => console.log(err),
    });
  }

  update(model:UpdateCategoryModel){
    this.categoryService.update(model).subscribe({
      next:(response)=>this.router.navigate(['/admin/category']),
      error:(err)=>console.log(err)
    });
  }

}
