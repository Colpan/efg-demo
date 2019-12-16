import { Component, OnInit } from '@angular/core';
import { CountryService } from './country.service';
import { Country } from 'app/model/country.model';
import { City } from 'app/model/city.model';
import { AuthService } from 'app/auth/auth.service';
import { FuseConfigService } from '@fuse/services/config.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss']
})
export class CountryComponent implements OnInit {
  countries: Country[] = [];
  cities: City[] = [];
  selectedCountry: Country;
  selectedCity: City;

  constructor(
    private countryService: CountryService,
    private authService: AuthService,
    private fuseConfigService: FuseConfigService,
    public router: Router,
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
    this.getCountries();
  }

  getCountries() {
    this.countryService.getCountries().subscribe((res: any) => {
      this.countries = (res.countries as Country[]).map(country => new Country(country));
    });
  }

  getCity(country: Country) {
    this.selectedCountry = country;
    this.countryService.getCity(country.id).subscribe((res: any) => {
      if (res.cities) {
        this.cities = (res.cities as City[]).map(city => new City(city));
      } else {
        this.cities = [];
      }
    });
  }


  setCity(city: City) {
    this.selectedCity = city;
    this.authService.saveCountryAndCity(this.selectedCountry, this.selectedCity);
    this.router.navigate(['home']);
  }
}
