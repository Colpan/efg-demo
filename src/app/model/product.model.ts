
export class Product {
  baseUnitOfMeasure: string;
  categoryCode: string;
  description2: string;
  description_en: string;
  description_kh: string;
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
    this.description_en = product.description_en;
    this.description_kh = product.description_kh;
    this.glyphText = product.glyphText;
    this.glyphText3 = product.glyphText3;
    this.glyphText4 = product.glyphText4;
    this.id = product.id;
    this.picture = product.picture;
    this.productGroupCode = product.productGroupCode;
    this.unitPriceIncludingVat = product.unitPriceIncludingVat;
  }
}

export class PromotionProduct {
  currencyCode: string;
  dealPriceOrDiscPercent: number;
  description: string;
  // TODO
  discType: number;
  discountAmount: number;
  discountAmountIncVat: number;
  // TODO
  lineGroup: string;
  lineNo: number;
  // is this the id ?
  no: string;
  noOfItemsNeeded: number;
  offerNo: string;
  offerPrice: number;
  offerPriceIncVat: number;
  priceGroup: string;
  standardPrice: number;
  standardPriceIncVat: number;
  // TODO
  type: number;
  unitOfMeasure: string;
  variantCode: string;

  constructor(product) {
    this.currencyCode = product.currencyCode;
    this.dealPriceOrDiscPercent = product.dealPriceOrDiscPercent;
    this.description = product.description;
    this.discType = product.discType;
    this.discountAmount = product.discountAmount;
    this.discountAmountIncVat = product.discountAmountIncVat;
    this.lineGroup = product.lineGroup;
    this.lineNo = product.lineNo;
    this.no = product.no;
    this.noOfItemsNeeded = product.noOfItemsNeeded;
    this.offerNo = product.offerNo;
    this.offerPrice = product.offerPrice;
    this.offerPriceIncVat = product.offerPriceIncVat;
    this.priceGroup = product.priceGroup;
    this.standardPrice = product.standardPrice;
    this.standardPriceIncVat = product.standardPriceIncVat;
    this.type = product.type;
    this.unitOfMeasure = product.unitOfMeasure;
    this.variantCode = product.variantCode;
  }
}
