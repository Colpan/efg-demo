export class Country {
  _id: string;
  logo: string;
  name_en: string;
  name_kh: string;
  name: string;

  constructor(country) {
    this._id = country.id;
    this.logo = country.logo;
    this.name_en = country.name_en;
    this.name_kh = country.name_kh;
    this.name = country.name;
  }
}