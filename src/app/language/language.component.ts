import { Component, OnInit } from '@angular/core';
import { languageList } from 'app/shared/language/language.data';
import { FuseConfigService } from '@fuse/services/config.service';
import { LanguageService } from './language.service';
import { Router } from '@angular/router';

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
    private router: Router,
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

  selectLanguage(language) {
    this.languageService.saveLanguage(language.id);
    this.router.navigate(['register']);
  }
}
