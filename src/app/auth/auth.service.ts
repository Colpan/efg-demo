import { Injectable, Inject } from '@angular/core';
import { LOCAL_STORAGE } from '@ng-toolkit/universal';
import { User } from 'app/model/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    @Inject(LOCAL_STORAGE) private localStorage: any
  ) { }

  saveUserToLocal(token, user) {
    const saveUser = new User(user);
    this.localStorage.setItem('admin', JSON.stringify(saveUser));
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

  async SignOuUserFromLocal() {
    await this.localStorage.removeItem('user');
    await this.localStorage.removeItem('token');
  }

  saveToken(token) {
    this.localStorage.setItem('token', token);
  }
}
