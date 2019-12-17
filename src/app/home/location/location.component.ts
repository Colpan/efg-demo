import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { AuthService } from 'app/auth/auth.service';
import { Country } from 'app/model/country.model';
import { City } from 'app/model/city.model';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit {
  @Input() country:  Country;
  @Input() city: City;
  // Outputs will be used for editing country and city to fetch new companies in home page
  @Output() countryChange: EventEmitter<Country> = new EventEmitter<Country>();
  @Output() cityChange: EventEmitter<City> = new EventEmitter<City>();

  constructor(
    private authService: AuthService,
  ) { }

  ngOnInit() {
  }
}
