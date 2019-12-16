import { Component, OnInit, Input } from '@angular/core';
import { CompanyService } from './company.service';
import { AuthService } from 'app/auth/auth.service';
import { Company } from 'app/model/company.model';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit {
  @Input() companies: Company[] = [];

  constructor() { }

  ngOnInit() { }

}
