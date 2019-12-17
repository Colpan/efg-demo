import { RetailProductGroup } from './retail-product-group.model';

export class MenuCategory {
  id: string;
  name: string;
  retailProductGroups: RetailProductGroup[];

  constructor(menuCategory) {
    this.id = menuCategory.id;
    this.name = menuCategory.name;
    this.retailProductGroups = menuCategory.retailProductGroups;
  }
}
