export class Product {
  baseUnitOfMeasure: string;
  categoryCode: string;
  description2: string;
  description_En: string;
  description_Kh: string;
  glyphText: string;
  glyphText3: string;
  glyphText4: string;
  id: string;
  picture: string;
  productGroupCode: string;
  unitPriceIncludingVat: number;

  constructor(product) {
    this.baseUnitOfMeasure = product.baseUnitOfMeasure;
    this.categoryCode = product.categoryCode;
    this.description2 = product.description2;
    this.description_En = product.description_En;
    this.description_Kh = product.description_Kh;
    this.glyphText = product.glyphText;
    this.glyphText3 = product.glyphText3;
    this.glyphText4 = product.glyphText4;
    this.id = product.id;
    this.picture = product.picture;
    this.productGroupCode = product.productGroupCode;
    this.unitPriceIncludingVat = product.unitPriceIncludingVat;
  }
}
