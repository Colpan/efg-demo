import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(
    private http: HttpClient,
  ) { }

  register({ userData }) {
    return this.http.post(`${environment.NODE_URI}/device/v1/user/register`, userData);
  }

  requestOTP(phoneNumber: string) {
    return this.http.post(`${environment.NODE_URI}/device/v1/user/otp-request`, { phoneNumber });
  }

  validateOTP({ otpData }) {
    return this.http.post(`${environment.NODE_URI}/device/v1/user/otp-validate`, otpData);
  }
}
