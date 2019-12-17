import { MenuCategory } from './menu-category.model';

export class Company {
  id: string;
  name_en: string;
  name_kh: string;
  title_en: string;
  title_kh: string;
  subtitle_en: string;
  subtitle_kh: string;
  acceptOrder: boolean;
  // menuCategories: MenuCategory[];
  logo: string;

  constructor(company) {
    this.id = company.id;
    this.name_en = company.name_en;
    this.name_kh = company.name_kh;
    this.title_en = company.title_en;
    this.title_kh = company.title_kh;
    this.subtitle_en = company.subtitle_en;
    this.subtitle_kh = company.subtitle_kh;
    this.acceptOrder = company.acceptOrder;
    this.logo = company.logo;
    // this.menuCategories = company.menuCategory ? ;
  }
}
