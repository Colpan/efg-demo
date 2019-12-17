import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Company } from 'app/model/company.model';
import { CompanyDetailService } from './company-detail.service';
import { MenuCategory } from 'app/model/menu-category.model';
import * as _ from 'lodash';
import { RetailProductGroup } from 'app/model/retail-product-group.model';
import { FuseConfigService } from '@fuse/services/config.service';

@Component({
  selector: 'app-company-detail',
  templateUrl: './company-detail.component.html',
  styleUrls: ['./company-detail.component.scss']
})
export class CompanyDetailComponent implements OnInit {
  company: Company;
  retailProductGroups: RetailProductGroup[] = [];


  constructor(
    private companyDetailService: CompanyDetailService,
    private route: ActivatedRoute,
    private fuseConfigService: FuseConfigService,
  ) {
    this.fuseConfigService.config = {
      layout: {
        toolbar  : {
          hidden: true
        },
        footer   : {
          hidden: true
        },
        sidepanel: {
          hidden: true
        },
      }
    };
  }

  ngOnInit() {
    this.getCompanyDetail();
  }

  getCompanyDetail() {
    const companyId = this.route.snapshot.paramMap.get('companyId');
    this.companyDetailService.getCompanyDetail(companyId).toPromise().then((res: any) => {
      this.company = new Company(res.companyDetails);
      this.processCategory();
    })
  }

  getCategoryDetail(category: MenuCategory) {
    const companyId = this.route.snapshot.paramMap.get('companyId') as string;
    category.retailProductGroups.map(retailGroup => {
      this.companyDetailService.getMenuCategory(companyId, retailGroup.id).toPromise().then((res: any) => {
        if (res && res.menuCategory && res.menuCategory.products) {
          retailGroup.products = res.menuCategory.products;
        }
        return retailGroup;
      });
    });
  }

  processCategory() {
    this.company.menuCategory.map(async category => {
      return await this.getCategoryDetail(category);
    });
    this.company.menuCategory.map(category => {
      category.retailProductGroups.map(productGroup => {
        this.retailProductGroups.push(productGroup);
      });
    });
  }
}
