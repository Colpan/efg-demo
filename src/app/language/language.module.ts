import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageComponent } from './language.component';
import { Route, RouterModule } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { LanguageGuard } from './language.guard';

const routes: Route[] = [
  {
    path: '',
    component: LanguageComponent,
  }
]


@NgModule({
  declarations: [LanguageComponent],
  imports: [
    CommonModule,
    MatListModule,
    RouterModule.forChild(routes),
  ]
})
export class LanguageModule { }
