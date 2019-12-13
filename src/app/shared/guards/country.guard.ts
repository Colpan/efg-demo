import { Injectable, Inject } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LOCAL_STORAGE } from '@ng-toolkit/universal';

@Injectable({
  providedIn: 'root'
})
export class CountryGuard implements CanActivate {
  constructor(
    public router: Router,
    @Inject(LOCAL_STORAGE) private LocalStorage: any
  ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<boolean> | Promise<boolean> | boolean {
    let country = '';
    let city = '';
    try {
      country = this.LocalStorage.getItem('country');
      city = this.LocalStorage.getItem('city');
    }
    catch{ }

    if (!country && !city) {
      this.router.navigate(['country']);
      return false
    }
    return true;
  }
}
