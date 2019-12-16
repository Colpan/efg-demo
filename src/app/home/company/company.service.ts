import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(
    private http: HttpClient,
  ) { }

  getCompanies(cityId: string) {
    return this.http.get(`${environment.NODE_URI}/device/v1/city/${cityId}`);
  }
}
