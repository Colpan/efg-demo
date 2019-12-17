import { Product } from './product.model';

export class MenuCategory {
  id: string;
  name_en: string;
  name_kh: string;
  description_en: string;
  description_kh: string;
  products: Product[];

  constructor(menu) {
    this.id = menu.id;
    this.name_en = menu.name_en;
    this.name_kh = menu.name_kh;
    this.description_en = menu.description_en;
    this.description_kh = menu.description_kh;
    this.products = menu.products ? menu.products.map(product => new Product(product)) : [];
  }
}
