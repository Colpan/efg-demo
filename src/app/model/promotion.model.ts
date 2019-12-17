export class Promotion {
  id: string;
  name_en: string;
  name_kh: string;
  image: string;
  from: number;
  discount:  number;
  type: number;

  constructor(promotion) {
    this.id = promotion.id;
    this.name_en = promotion.logo;
    this.name_kh = promotion.name_kh;
    this.image = promotion.image;
    this.from = promotion.from;
    this.discount = promotion.discount;
    this.type = promotion.type;
  }
}
