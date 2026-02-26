import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BannerDto } from '../models/bannerDto';
import { Result } from '../models/result';

@Injectable({
  providedIn: 'root',
})
export class BannerService {
  private http=inject(HttpClient);
  apiUrl="https://localhost:7000/api/banner/";

  getAll(){
    return this.http.get<Result<BannerDto[]>>(this.apiUrl);
  }

  getById(id:number){
    return this.http.get<Result<BannerDto>>(this.apiUrl+id);
  }

  create(model:BannerDto){
    return this.http.post<Result<void>>(this.apiUrl,model);
  }

  update(model:BannerDto){
    return this.http.put<Result<void>>(this.apiUrl,model);
  }

  delete(id:number){
    return this.http.delete<Result<void>>(this.apiUrl+id);
  }

}
