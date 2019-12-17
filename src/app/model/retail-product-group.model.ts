import { Product } from './product.model';

export class RetailProductGroup {
  id: string;
  description: string;
  products: Product[];

  constructor(retailProductGroup) {
    this.id = retailProductGroup.id;
    this.description = retailProductGroup.description;
    this.products = retailProductGroup.products;
  }
}
