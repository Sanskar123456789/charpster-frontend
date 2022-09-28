import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{
  
  constructor(private router: Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    const user = localStorage.getItem('udata');

    if(user){
      const userJson = JSON.parse(user);
      console.log(userJson);
      return true;   
    }
    else{
      console.log("IN");
      this.router.navigate(['/Login']);
      return false;

    }

  }



}
