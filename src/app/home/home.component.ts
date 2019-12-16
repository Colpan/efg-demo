import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/auth/auth.service';
import { CompanyService } from './company/company.service';
import { City } from 'app/model/city.model';
import { Country } from 'app/model/country.model';
import { Company } from 'app/model/company.model';
import { FuseConfigService } from '@fuse/services/config.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  city: City;
  country: Country;
  companies: Company[] = [];

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
    this.companyService.getCompanies(city.id).toPromise().then((res: any) => {
      if (res.city.companies) {
        this.companies = (res.city.companies).map(company => new Company(company));
      }
    }, (error) => {
      console.log(error, 'error')
    })
  }

}
