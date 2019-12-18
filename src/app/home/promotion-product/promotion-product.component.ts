import { Component, OnInit, Input } from '@angular/core';
import { PromotionProduct } from 'app/model/product.model';

@Component({
  selector: 'app-promotion-product',
  templateUrl: './promotion-product.component.html',
  styleUrls: [],
})
export class PromotionProductComponent implements OnInit {
  @Input() promotionProduct: PromotionProduct[] = [];
  @Input() isFetchingCity = false;

  constructor() { }

  ngOnInit() {
    console.log(this.promotionProduct);
  }

}
