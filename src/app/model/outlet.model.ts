export class Outlet {
  address: string;
  address2: string;
  city: string;
  countryCode: string;
  deliverFee: number;
  id: string;
  latitude: number;
  longitude: number;
  minimumOrder: number;
  name_en: string;
  name_kh: string
  // TODO
  openTimes: any[];
  phoneNo: string;
  postCode: string;
  // TODO
  retailCharges: any[];

  constructor(outlet) {
    this.address = outlet.address || '';
    this.address2 = outlet.address2 || '';
    this.city = outlet.city || '';
    this.countryCode = outlet.countryCode || '';
    this.deliverFee = outlet.deliverFee || '';
    this.id = outlet.id || '';
    this.latitude = outlet.latitude || -1;
    this.longitude = outlet.longitude || -1;
    this.minimumOrder = outlet.minimumOrder || 0;
    this.name_en = outlet.name || '';
    this.name_kh = '';
    this.openTimes = outlet.openTimes || [];
    this.phoneNo = outlet.phoneNo || '';
    this.postCode = outlet.postCode || '';
    this.retailCharges = outlet.retailCharges || [];
  }
}
