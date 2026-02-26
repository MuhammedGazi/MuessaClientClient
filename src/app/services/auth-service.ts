import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Result } from '../models/result';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private http = inject(HttpClient);
  private router = inject(Router);
  apiUrl = 'https://localhost:7000/api/users/login/';
  decodedToken: any;
  jwtHelper = new JwtHelperService();

  login(model) {
    return this.http.post<any>(this.apiUrl, model);
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['']);
  }

  decodeToken() {
    let token = localStorage.getItem('token');
    this.decodedToken = this.jwtHelper.decodeToken(token);
    return this.decodedToken;
  }

  loggedIn() {
    const token = localStorage.getItem('token');
    return !this.jwtHelper.isTokenExpired(token);
  }

  getUserId() {
    let decodedToken = this.decodeToken();
    return decodedToken.sub;
  }

  getUserName() {
    let decodedToken = this.decodeToken();
    return decodedToken.name;
  }
}
