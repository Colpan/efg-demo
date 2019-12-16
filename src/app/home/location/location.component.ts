import { Component, OnInit, Input } from '@angular/core';
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
  @Input() city: City

  constructor(
    private authService: AuthService,
  ) { }

  ngOnInit() {
  }
}
