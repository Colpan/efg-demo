import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { City } from 'app/model/city.model';

@Component({
  selector: 'app-city-list',
  templateUrl: './city-list.component.html',
  styleUrls: ['./city-list.component.scss']
})
export class CityListComponent implements OnInit {
  @Input() cities: City[] = [];
  @Output() selectedCity: EventEmitter<City> = new EventEmitter<City>();

  constructor() { }

  ngOnInit() {
  }

  select(city: City) {
    this.selectedCity.emit(city);
  }

}
