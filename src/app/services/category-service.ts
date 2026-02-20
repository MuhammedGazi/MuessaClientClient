import { UpdateCategoryModel } from './../models/categoryModels/updateCategoryModel';
import { CategoryListModel } from './../models/categoryModels/categoryListModel';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Result } from '../models/result';
import { CreateCategoryModel } from '../models/categoryModels/createCategoryModel';
import { UpdateCategory } from '../admin-components/category/update-category/update-category';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private http=inject(HttpClient);
  apiUrl="https://localhost:7000/api/categories";

  getAll(){
    return this.http.get<Result<CategoryListModel[]>>(this.apiUrl);
  }

  create(model:CreateCategoryModel){
    return this.http.post<Result<CategoryListModel>>(this.apiUrl,model);
  }

  getById(id:number){
    return this.http.get<Result<CategoryListModel>>(`${this.apiUrl}/${id}`);
  }

  update(model:UpdateCategoryModel){
    return this.http.put<Result<CategoryListModel>>(this.apiUrl,model);
  }

  delete(id:number){
    return this.http.delete<Result<CategoryListModel>>(`${this.apiUrl}/${id}`);
  }
}
