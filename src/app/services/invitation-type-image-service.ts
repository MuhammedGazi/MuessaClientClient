import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Result } from '../models/result';
import { InvitationTypeImageDto } from '../models/invitationTypeImageDto';

@Injectable({
  providedIn: 'root',
})
export class InvitationTypeImageService {
  private http=inject(HttpClient);
  apiUrl="https://localhost:7000/api/invitationTypeImage/";

  getAll(){
    return this.http.get<Result<InvitationTypeImageDto[]>>(this.apiUrl);
  }

  getById(id:number){
    return this.http.get<Result<InvitationTypeImageDto>>(this.apiUrl+id)
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
