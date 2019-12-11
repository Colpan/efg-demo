import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageComponent } from './language.component';
import { Route, RouterModule } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { NoLanguageGuard } from 'app/shared/guards/no-language.guard';
import { TranslateModule } from '@ngx-translate/core';

const routes: Route[] = [
  {
    path: '',
    component: LanguageComponent,
    canActivate: [NoLanguageGuard]
  }
];

@NgModule({
  declarations: [LanguageComponent],
  imports: [
    CommonModule,
    MatListModule,
    TranslateModule,
    RouterModule.forChild(routes),
  ]
})
export class LanguageModule { }
