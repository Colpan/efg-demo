import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryListComponent } from './country-list/country-list.component';
import { RouterModule, Route } from '@angular/router';
import { LanguageGuard } from 'app/shared/guards/language.guard';
import { CountryComponent } from './country.component';
import { CityListComponent } from './city-list/city-list.component';
import { FuseSharedModule } from '@fuse/shared.module';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatOptionModule } from '@angular/material/core';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { UserGuard } from 'app/shared/guards/user.guard';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';

const routes: Route[] = [
  {
    path: 'country',
    component: CountryComponent,
    canActivate: [
      LanguageGuard,
      UserGuard
    ]
  }
];

@NgModule({
  declarations: [
    CountryListComponent,
    CountryComponent,
    CityListComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    FuseSharedModule,
    MatDividerModule,
    MatListModule,
    MatSelectModule,
    MatFormFieldModule,
    MatOptionModule,
    RouterModule.forChild(routes),
  ]
})
export class CountryModule { }
