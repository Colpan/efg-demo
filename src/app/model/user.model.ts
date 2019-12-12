export class User {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  language: string;
  country: string;

  constructor(user) {
    this._id = user._id;
    this.firstName = user.firstName;
    this.lastName = user.lastName;
    this.email = user.email;
    this.language = user.language;
    this.country = user.country;
  }
}
