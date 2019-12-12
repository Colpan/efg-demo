import { Injectable, Inject } from '@angular/core';
import { LOCAL_STORAGE } from '@ng-toolkit/universal';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  constructor(
    @Inject(LOCAL_STORAGE) private localStorage: any,
    private translateService: TranslateService,
  ) { }

  async saveLanguage(languageId: string) {
    this.setLanguage(languageId);
    await this.localStorage.setItem('language', languageId);
  }

  setLanguage(languageId) {
    this.translateService.use(languageId);
  }

  async removeLanguage() {
    await this.localStorage.removeItem('language');
  }

  async getLanguage() {
    return await this.localStorage.getItem('language');
  }
}
