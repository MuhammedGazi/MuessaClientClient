import { ClayDesignDto } from './../models/clayDesignDto';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Result } from '../models/result';

@Injectable({
  providedIn: 'root',
})
export class ClayDesignService {
  private http=inject(HttpClient);
  apiUrl="https://localhost:7000/api/claydesign";

  getAll(){
    return this.http.get<Result<ClayDesignDto[]>>(this.apiUrl);
  }

  getById(id:number){
    return this.http.get<Result<ClayDesignDto>>(this.apiUrl+'/'+id)
  }

  create(model:ClayDesignDto){
    return this.http.post(this.apiUrl,model);
  }

  update(model:ClayDesignDto){
    return this.http.put(this.apiUrl,model);
  }

  delete(id:number){
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
