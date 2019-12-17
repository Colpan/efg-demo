import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MembershipComponent } from './membership/membership.component';
import { LanguageGuard } from 'app/shared/guards/language.guard';
import { RouterModule, Route } from '@angular/router';
import { FuseSharedModule } from '@fuse/shared.module';
import { MatButtonModule } from '@angular/material/button';

const routes: Route[] = [
  {
    path: 'membership',
    component: MembershipComponent,
    canActivate: [
      LanguageGuard
    ]
  }
];

@NgModule({
  declarations: [
    MembershipComponent,
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    RouterModule.forChild(routes),
    FuseSharedModule
  ]
})
export class SplashModule { }
