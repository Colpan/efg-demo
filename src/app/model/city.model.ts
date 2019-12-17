import { Company } from './company.model';
import { Promotion } from './promotion.model';

export class City {
  id: string;
  name_en: string;
  name_kh: string;
  acceptOrder: boolean;
  companies: Company[];
  promotions: Promotion[];

  constructor(city) {
    this.id = city.id;
    this.name_en = city.name_en;
    this.name_kh = city.name_kh;
    this.acceptOrder = city.acceptOrder;
    this.companies = city.companies ? city.companies.map(company => new Company(company)) : [];
    this.promotions = city.promotions ? city.promotions.map(promotion => new Promotion(promotion)) : [];
  }
}
