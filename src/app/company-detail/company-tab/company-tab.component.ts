import { Component, Input, OnChanges } from '@angular/core';
import { CompanyDetailService } from '../company-detail.service';
import { ActivatedRoute } from '@angular/router';
import { MenuCategory } from 'app/model/menu-category.model';
import { RetailProductGroup } from 'app/model/retail-product-group.model';

@Component({
  selector: 'app-company-tab',
  templateUrl: './company-tab.component.html',
  styleUrls: ['./company-tab.component.scss']
})
export class CompanyTabComponent implements OnChanges {
  @Input() retailGroup: RetailProductGroup;
  doneFetching = false;

  constructor() { }

  ngOnChanges() { }
}
