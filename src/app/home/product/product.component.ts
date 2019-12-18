import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'app/model/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: [],
})
export class ProductComponent implements OnInit {
  @Input() product: Product;

  constructor() { }

  ngOnInit() {
  }

}
