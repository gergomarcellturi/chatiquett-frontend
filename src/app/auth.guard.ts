import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { GlobalService } from './services/global.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private globalService: GlobalService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (route.routeConfig?.path === 'login' && !!this.globalService.userData) {
        this.router.navigate(['']);
        return true;
      }

      if (route.routeConfig?.path === 'login') {
        return true;
      }
      
      if (!this.globalService.userData) {
        this.router.navigate(['/login']);
      }
      
      return !!this.globalService.userData;
  }
  
}
