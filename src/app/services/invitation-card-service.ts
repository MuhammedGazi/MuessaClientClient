import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Result } from '../models/result';
import { InvitationCardDto } from '../models/invitationCardDto';

@Injectable({
  providedIn: 'root',
})
export class InvitationCardService {
  private http=inject(HttpClient);
  apiUrl="https://localhost:7000/api/invitationCard/";

  getAll(){
    return this.http.get<Result<InvitationCardDto[]>>(this.apiUrl);
  }

  getById(id:number){
    return this.http.get<Result<InvitationCardDto>>(this.apiUrl+id);
  }

  create(model:InvitationCardDto) {
    return this.http.post<Result<void>>(this.apiUrl,model);
  }

  update(model:InvitationCardDto){
    return this.http.put<Result<void>>(this.apiUrl,model)
  }

  delete(id:number){
    return this.http.delete<Result<void>>(this.apiUrl+id)
  }
}
