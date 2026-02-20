import { Component, inject } from '@angular/core';
import { CategoryService } from '../../services/category-service';
import { toSignal } from '@angular/core/rxjs-interop';
import { map, tap } from 'rxjs';

@Component({
  selector: 'app-category',
  standalone: false,
  templateUrl: './category.html',
  styleUrl: './category.css',
})
export class Category {
  private categoryService=inject(CategoryService);
  //categories=toSignal(this.categoryService.getAll(),{initialValue:[]});

  categories = toSignal(
    this.categoryService.getAll().pipe(
      tap(result => {
        if (result.errors) {
          console.log('API Hatası:', result.errors);
        }
      }),map(result => result.data)),{ initialValue: [] });

  delete(id:number){
    this.categoryService.delete(id).subscribe({
      next:(response)=>window.location.reload(),
      error:(err)=>console.log(err)
    });
  }
}
