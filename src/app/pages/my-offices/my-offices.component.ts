import { Component, OnInit } from '@angular/core';
import { Offices } from '../interfaces/pages.interface';
import { FetchService } from '../services/fetch.service';

@Component({
  selector: 'app-my-offices',
  templateUrl: './my-offices.component.html',
  styles: [],
})
export class MyOfficesComponent implements OnInit {
  public offices: Offices[] = [];

  constructor(private fetchService: FetchService) {}

  ngOnInit(): void {
    const id = '61ad388b70baa6fea82c37e5';
    this.fetchService
      .getOfficesByDoctorId(id)
      .subscribe((res) => (this.offices = res));
  }
}
