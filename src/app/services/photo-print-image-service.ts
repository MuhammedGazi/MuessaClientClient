import { Result } from './../models/result';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { PhotoPrintImageDto } from '../models/photoPrintImageDto';

@Injectable({
  providedIn: 'root',
})
export class PhotoPrintImageService {
  private http = inject(HttpClient);
  apiUrl = 'https://localhost:7000/api/photoPrintImage/';

  getAll() {
    return this.http.get<Result<PhotoPrintImageDto[]>>(this.apiUrl);
  }
  getById(id: number) {
    return this.http.get<Result<PhotoPrintImageDto>>(this.apiUrl + id);
  }
  create(model: FormData) {
    return this.http.post<Result<void>>(this.apiUrl, model);
  }
  update(model: FormData) {
    return this.http.put<Result<void>>(this.apiUrl, model);
  }
  delete(id: number) {
    return this.http.delete<Result<void>>(this.apiUrl + id);
  }
}
