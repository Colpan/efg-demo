export class Company {
  id: string;
  name_en: string;
  name_kh: string;
  title_en: string;
  title_kh: string;
  subtitle_en: string;
  subtitle_kh: string;
  acceptOrder: boolean;
  logo: string;

  constructor(company) {
    this.id = company.id;
    this.name_en = company.name_En;
    this.name_kh = company.name_Kh;
    this.title_en = company.title_En;
    this.title_kh = company.title_Kh;
    this.subtitle_en = company.subtitle_En;
    this.subtitle_kh = company.subtitle_Kh;
    this.acceptOrder = company.acceptOrder;
    this.logo = company.logo;
  }
}
