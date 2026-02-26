import { AuthService } from './../services/auth-service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authserService:AuthService,
              private router:Router
  ) { }

  canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot):MaybeAsync<GuardResult>{
    if(this.authserService.loggedIn()){
      return true;
    }
    console.log("auth guard çalıştı");
    this.router.navigate([""]);
    return false;
  }
}
