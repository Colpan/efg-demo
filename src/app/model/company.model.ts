import { MenuCategory } from './menu-category.model';
import { Promotion } from './promotion.model';
import { Outlet } from './outlet.model';

export class Company {
  acceptOrder: boolean;
  id: string;
  logo: string;
  name_en: string;
  name_kh: string;
  subtitle_en: string;
  subtitle_kh: string;
  title_en: string;
  title_kh: string;
  menuCategories: MenuCategory[];
  outlets: Outlet[];
  promotions: Promotion[];

  constructor(company) {
    this.acceptOrder = company.acceptOrder;
    this.id = company.id;
    this.logo = company.logo;
    this.name_en = company.name_en;
    this.name_kh = company.name_kh;
    this.subtitle_en = company.subtitle_en;
    this.subtitle_kh = company.subtitle_kh;
    this.title_en = company.title_en;
    this.title_kh = company.title_kh;
    this.menuCategories = company.menuCategories ? company.menuCategories.map(menu => new MenuCategory(menu)) : [];
    this.promotions = company.promotions ? company.promotions.map(promotion => new Promotion(promotion)) : [];
    this.outlets = company.outlets ? company.outlets.map(outlet => new Outlet(outlet)) : [];
  }
}
