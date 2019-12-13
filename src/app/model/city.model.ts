export class City {
  _id: string;
  name_en: string;
  name_kh: string;
  name: string;

  constructor(city) {
    this._id = city._id;
    this.name_en = city.name_en;
    this.name_kh = city.name_kh;
    this.name = city.name;
  }
}
