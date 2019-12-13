import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(
    private http: HttpClient,
  ) { }

  getCountries() {
    return this.http.get(`${environment.NODE_URI}/device/v1/countries`);
  }

  getCity(id: string) {
    return this.http.get(`${environment.NODE_URI}/device/v1/countries/${id}/cities`);
  }
}
