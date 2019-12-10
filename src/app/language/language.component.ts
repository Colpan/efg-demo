import { Component, OnInit } from '@angular/core';
import { languageList } from 'app/shared/language/language.data';
import { FuseConfigService } from '@fuse/services/config.service';
import { LanguageService } from './language.service';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.scss']
})
export class LanguageComponent implements OnInit {
  languageList = languageList;

  constructor(
    private fuseConfigService: FuseConfigService,
    private languageService: LanguageService,
  ) {
    this.fuseConfigService.config = {
      layout: {
        navbar: {
          hidden: true
        },
        toolbar: {
          hidden: true
        },
        footer: {
          hidden: true
        },
        sidepanel: {
          hidden: true
        }
      }
    };
  }

  ngOnInit() {
  }

  selectLanguage(language: string) {
    this.languageService.saveLanguage(language);
  }
}
