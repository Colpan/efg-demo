import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register.component';
import { RouterModule, Route } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { FuseSharedModule } from '@fuse/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { LanguageGuard } from 'app/shared/guards/language.guard';
import { MatDialogModule } from '@angular/material/dialog';
import { OtpModalComponent } from './otp-modal/otp-modal.component';

const routes: Route[] = [
  {
    path: 'register',
    component: RegisterComponent,
    canActivate: [LanguageGuard]
  }
];

@NgModule({
  declarations: [
    RegisterComponent,
    OtpModalComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    MatButtonModule,
    MatDialogModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    FuseSharedModule
  ],
  entryComponents: [
    OtpModalComponent
  ]
})
export class RegisterModule { }
