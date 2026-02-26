import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth-service';
import { LoginDto } from '../../models/loginDto';
declare const alertify: any;

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  constructor(private authService: AuthService, private router: Router) { }

  loginDto: LoginDto = new LoginDto();
  token: any;
  decodedToken: any;

  login() {
    this.authService.login(this.loginDto).subscribe({
      next: (result) => {
        this.token = result.data;
        localStorage.setItem('token', result.data);
        this.router.navigate(['/admin']);
      },
      error: (result) => {
        console.log(result.error);
      },
    });
  }

  decodeToken() {
    let decodedToken = this.authService.decodeToken();
    this.decodedToken = decodedToken;
  }
}
