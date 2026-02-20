import { inject, Injectable } from '@angular/core';
import { Result } from '../models/result';
import { ClayDesignImageDto } from '../models/clayDesignImageDto';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ClayDesingImageService {
  private http=inject(HttpClient);
  apiUrl="https://localhost:7000/api/clayDesignImage/";

  getAll(){
    return this.http.get<Result<ClayDesignImageDto[]>>(this.apiUrl);
  }

  getById(id:number){
    return this.http.get<Result<ClayDesignImageDto>>(this.apiUrl+id);
  }

  create(model:FormData){
    return this.http.post<Result<void>>(this.apiUrl,model);
  }

  update(model:FormData){
    return this.http.put<Result<void>>(this.apiUrl,model);
  }

  delete(id:number){
    return this.http.delete<Result<void>>(this.apiUrl+id);
  }
}
