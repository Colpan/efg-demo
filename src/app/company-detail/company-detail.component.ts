import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Company } from 'app/model/company.model';
import { CompanyDetailService } from './company-detail.service';
import { MenuCategory } from 'app/model/menu-category.model';
import * as _ from 'lodash';
import { FuseConfigService } from '@fuse/services/config.service';

@Component({
  selector: 'app-company-detail',
  templateUrl: './company-detail.component.html',
  styleUrls: ['./company-detail.component.scss']
})
export class CompanyDetailComponent implements OnInit {
  company: Company;
  categories: MenuCategory[] = [];

  constructor(
    private companyDetailService: CompanyDetailService,
    private route: ActivatedRoute,
    private fuseConfigService: FuseConfigService,
  ) {
    this.fuseConfigService.config = {
      layout: {
        toolbar  : {
          hidden: false,
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
    if (!companyId) {
      return;
    }
    this.companyDetailService.getCompanyDetail(companyId).toPromise().then(async (res: any) => {
      if (res.company) {
        this.company = new Company(res.company);
        if (this.company.menuCategories) {
          this.categories = [];
          this.company.menuCategories.forEach(async (category) => {
            const completedCategory = await this.getCategoryDetail(category);
            this.categories.push(new MenuCategory(completedCategory));
          });
        }
      }
    });
  }

  async getCategoryDetail(category: MenuCategory): Promise<MenuCategory> {
      return this.companyDetailService.getMenuCategory(this.company.id, category.id).toPromise().then((res: any) => {
        if (res && res.menuCategory && res.menuCategory.products) {
          category.products = res.menuCategory.products;
        }
        return category;
      });
  }
}
