import { Injectable, Inject } from '@angular/core';
import { LOCAL_STORAGE } from '@ng-toolkit/universal';
import { User } from 'app/model/user.model';
import { Country } from 'app/model/country.model';
import { City } from 'app/model/city.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    @Inject(LOCAL_STORAGE) private localStorage: any
  ) { }

  saveUserToLocal(token, user) {
    const saveUser = new User(user);
    this.localStorage.setItem('user', JSON.stringify(saveUser));
    this.localStorage.setItem('token', token);
  }

  async getUserFromLocal() {
    try {
      let user = null;
      const stringUser = await this.localStorage.getItem('user');
      if (stringUser) user = new User(JSON.parse(stringUser));
      return user;
    } catch (e) { }
  }

  async SignOutUserFromLocal() {
    await this.localStorage.removeItem('user');
    await this.localStorage.removeItem('token');
  }

  saveToken(token) {
    this.localStorage.setItem('token', token);
  }

  saveCountryAndCity(country, city) {
    this.localStorage.setItem('country', JSON.stringify(country));
    this.localStorage.setItem('city', JSON.stringify(city));
  }

  async getCountryAndCity() {
    try {
      let country = null;
      let city = null
      const stringCountry = await this.localStorage.getItem('country');
      const stringCity = await this.localStorage.getItem('city');
      if (stringCountry) country = new Country(JSON.parse(stringCountry));
      if (stringCity) city = new City(JSON.parse(stringCity));
      return { city, country };
    } catch (e) { }
  }
}
