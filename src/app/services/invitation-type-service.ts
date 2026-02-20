import { InvitationTypeDto } from './../models/invitationTypeDto';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Result } from '../models/result';

@Injectable({
  providedIn: 'root',
})
export class InvitationTypeService {
  private http=inject(HttpClient);
  apiUrl="https://localhost:7000/api/invitationType/";

  getAll() {
    return this.http.get<Result<InvitationTypeDto[]>>(this.apiUrl);
  }

  getById(id: number) {
    return this.http.get<Result<InvitationTypeDto>>(this.apiUrl + id);
  }

  create(model:InvitationTypeDto) {
    return this.http.post<Result<void>>(this.apiUrl, model);
  }

  update(model:InvitationTypeDto) {
    return this.http.put<Result<void>>(this.apiUrl, model);
  }

  delete(id: number) {
    return this.http.delete<Result<void>>(this.apiUrl + id);
  }
}
