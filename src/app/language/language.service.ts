import { Injectable, Inject } from '@angular/core';
import { LOCAL_STORAGE } from '@ng-toolkit/universal';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  constructor(
    @Inject(LOCAL_STORAGE) private localStorage: any
  ) { }

  async saveLanguage(language: string) {
    // this.removeLanguage();
    await this.localStorage.setItem('language', language);
  }

  async removeLanguage() {
    await this.localStorage.removeItem('language');
  }

  async getLanguage() {
    return await this.localStorage.getItem('language');
  }
}
