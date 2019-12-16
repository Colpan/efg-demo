import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/auth/auth.service';
import { CompanyService } from './company/company.service';
import { City } from 'app/model/city.model';
import { Country } from 'app/model/country.model';
import { Company } from 'app/model/company.model';
import { FuseConfigService } from '@fuse/services/config.service';
import { Promotion } from 'app/model/promotion.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  city: City;
  country: Country;
  companies: Company[] = [];
  promotions: Promotion[] = [];
  isFetchingCity = false;

  constructor(
    private companyService: CompanyService,
    private authService: AuthService,
    private fuseConfigService: FuseConfigService,
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

  async ngOnInit() {
    const { city, country }  = await this.authService.getCountryAndCity();
    this.city = city;
    this.country = country;
    this.isFetchingCity = true;
    this.companyService.getCompaniesAndPromotions(city.id).toPromise().then((res: any) => {
      this.getCompanies(res);
      this.getPromotion(res);
      this.isFetchingCity = false;
    }, (error) => {
      this.isFetchingCity = false;
    })
  }

  getCompanies(res) {
    if (res && res.city && res.city.companies) {
      this.companies = (res.city.companies).map(company => new Company(company));
    }
  }

  getPromotion(res) {
    if (res && res.city && res.city.promotions) {
      this.promotions = (res.city.promotions).map(promotion => new Promotion(promotion));
    }
  }

}
