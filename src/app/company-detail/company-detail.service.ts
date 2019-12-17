import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CompanyDetailService {

  constructor(
    private http: HttpClient,
  ) { }

  getCompanyDetail(companyId: string) {
    return this.http.get(`${environment.NODE_URI}/device/v1/company/${companyId}`);
  }

  getMenuCategory(companyId: string, categoryId: string) {
    return this.http.get(`${environment.NODE_URI}/device/v1/company/${companyId}/category/${categoryId}`);
  }
}
