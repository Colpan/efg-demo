export class Country {
  id: string;
  flag: string;
  acceptOrder: boolean;
  name_en: string;
  name_kh: string;

  constructor(country) {
    this.id = country.id;
    this.flag = country.logo;
    this.name_en = country.name_en;
    this.name_kh = country.name_kh;
  }
}
