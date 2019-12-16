import { Component, OnInit, Input } from '@angular/core';
import { Promotion } from 'app/model/promotion.model';

@Component({
  selector: 'app-promotion',
  templateUrl: './promotion.component.html',
  styleUrls: ['./promotion.component.scss']
})
export class PromotionComponent implements OnInit {
  @Input() promotions: Promotion[] = [];
  @Input() isFetchingCity = false;

  constructor() { }

  ngOnInit() {
  }

}
