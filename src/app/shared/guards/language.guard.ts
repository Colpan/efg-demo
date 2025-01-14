import { Injectable, Inject } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LOCAL_STORAGE } from '@ng-toolkit/universal';

@Injectable({
  providedIn: 'root'
})
export class LanguageGuard implements CanActivate {
  constructor(
    public router: Router,
    @Inject(LOCAL_STORAGE) private LocalStorage: any
  ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<boolean> | Promise<boolean> | boolean {
    let language = '';
    try {
      language = this.LocalStorage.getItem('language');
    }
    catch{ }

    if (!language) {
      this.router.navigate(['']);
      return false
    }
    return true;
  }
}
