import { Component, Input, OnChanges } from '@angular/core';
import { MenuCategory } from 'app/model/menu-category.model';

@Component({
  selector: 'app-company-tab',
  templateUrl: './company-tab.component.html',
  styleUrls: ['./company-tab.component.scss']
})
export class CompanyTabComponent implements OnChanges {
  @Input() category: MenuCategory;
  doneFetching = false;

  constructor() { }

  ngOnChanges() { }
}
