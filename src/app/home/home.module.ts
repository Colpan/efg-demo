import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyComponent } from './company/company.component';
import { HomeComponent } from './home.component';
import { LocationComponent } from './location/location.component';
import { LanguageGuard } from 'app/shared/guards/language.guard';
import { UserGuard } from 'app/shared/guards/user.guard';
import { CountryGuard } from 'app/shared/guards/country.guard';
import { RouterModule, Route } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { PromotionComponent } from './promotion/promotion.component';
import { FusePipesModule } from '@fuse/pipes/pipes.module';

const routes: Route[] = [
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [
      LanguageGuard,
      UserGuard,
      CountryGuard,
    ]
  }
];

@NgModule({
  declarations: [
    CompanyComponent,
    HomeComponent,
    LocationComponent,
    PromotionComponent,
  ],
  imports: [
    CommonModule,
    MatCardModule,
    FusePipesModule,
    RouterModule.forChild(routes),
  ]
})
export class HomeModule { }
