import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { FuseConfigService } from '@fuse/services/config.service';
import { LanguageService } from 'app/language/language.service';
import { fuseAnimations } from '@fuse/animations';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  animations   : fuseAnimations,
  encapsulation: ViewEncapsulation.None,
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  constructor(
    private fuseConfigService: FuseConfigService,
    private languageService: LanguageService,
    public formBuilder: FormBuilder,
  ) {
    this.fuseConfigService.config = {
      layout: {
        navbar   : {
          hidden: true
        },
        toolbar  : {
          hidden: true
        },
        footer   : {
          hidden: true
        },
        sidepanel: {
          hidden: true
        }
      }
    };
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      phoneNo: new FormControl('', Validators.required),
      firstName: new FormControl('',Validators.required),
      lastName: new FormControl('',Validators.required),
      country: new FormControl('',Validators.required),
      city: new FormControl('',Validators.required),
      name: new FormControl('',Validators.required),
      connectionType: new FormControl('',Validators.required),
      language: new FormControl('',Validators.required),
    });
  }

  async setLanguage() {
    const language = await this.languageService.getLanguage();
    this.registerForm.patchValue({ language });
  }
}
