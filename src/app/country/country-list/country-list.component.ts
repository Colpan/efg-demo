import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Country } from 'app/model/country.model';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.scss']
})
export class CountryListComponent implements OnInit {
  @Input() countries: Country[] = [];
  @Output() selectedCountry: EventEmitter<Country> = new EventEmitter<Country>();
  showSelectedCountry = '';

  constructor() { }

  ngOnInit() {
  }

  select(country: Country) {
    if (!country) {
      return;
    }
    this.showSelectedCountry = country.name_en;
    this.selectedCountry.emit(country);
  }
}