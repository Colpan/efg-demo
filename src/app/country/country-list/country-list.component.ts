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

  constructor() { }

  ngOnInit() {
  }

  select(country: Country) {
    if (!country) {
      return;
    }
    this.selectedCountry.emit(country);
  }
}
