export class PromotionProduct {

  currencyCode: string;
  dealPriceOrDiscPercent: number;
  description_en: string;
  description_kh: string;
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
    this.description_en = product.description_en;
    this.description_kh = product.description_kh;
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
export class Promotion {

  amountToTrigger: number;
  brand: string;
  couponCode: string;
  couponQtyNeeded: number;
  dealPriceValue: number;
  description_en: string;
  description_kh: string;
  discPercentOfLeastExpensive: number;
  discountAmountValue: number;
  discountPercentValue: number;
  discountType: number;
  divisionCode: string;
  endingDate: Date;
  memberAttribute: string;
  memberAttributeValue: string;
  // TODO
  memberType: number;
  no: string;
  noOfLeastExpensive: number;
  noOfLineGroups: number;
  noOfLineToTrigger: number;
  // TODO
  offerType: number;
  periodicDiscountLine: PromotionProduct[];
  popUpLine1: string;
  popUpLine2: string;
  popUpLine3: string;
  priceGroup: string;
  // TODO
  sameDifMmLine: number;
  startingDate: Date;
  // TODO
  status: number;
  validationPeriod: string;

  constructor(promotion) {
    this.amountToTrigger = promotion.amountToTrigger;
    this.brand = promotion.brand;
    this.couponCode = promotion.couponCode;
    this.couponQtyNeeded = promotion.couponQtyNeeded;
    this.dealPriceValue = promotion.dealPriceValue;
    this.description_en = promotion.description;
    this.description_kh = promotion.description_kh;
    this.discPercentOfLeastExpensive = promotion.discPercentOfLeastExpensive;
    this.discountAmountValue = promotion.discountAmountValue;
    this.discountPercentValue = promotion.discountPercentValue;
    this.discountType = promotion.discountType;
    this.divisionCode = promotion.divisionCode;
    this.endingDate = promotion.endingDate;
    this.memberAttribute = promotion.memberAttribute;
    this.memberAttributeValue = promotion.memberAttributeValue;
    this.memberType = promotion.memberType;
    this.no = promotion.no;
    this.noOfLeastExpensive = promotion.noOfLeastExpensive;
    this.noOfLineGroups = promotion.noOfLineGroups;
    this.noOfLineToTrigger = promotion.noOfLineToTrigger;
    this.offerType = promotion.offerType;
    this.periodicDiscountLine = promotion.periodicDiscountLine ? promotion.periodicDiscountLine.map(product => new PromotionProduct(product)) : [];
    this.popUpLine1 = promotion.popUpLine1;
    this.popUpLine2 = promotion.popUpLine2;
    this.popUpLine3 = promotion.popUpLine3;
    this.priceGroup = promotion.priceGroup;
    this.sameDifMmLine = promotion.sameDifMmLine;
    this.startingDate = promotion.startingDate;
    this.status = promotion.status;
    this.validationPeriod = promotion.validationPeriod;
  }
}
