import { Component, OnInit } from '@angular/core';
import { FetchService } from '../services/fetch.service';

@Component({
  selector: 'app-my-reservations',
  templateUrl: './my-reservations.component.html',
  styles: [],
})
export class MyReservationsComponent implements OnInit {
  public userId = '61ad82eb70e3de391f5b6f15';
  constructor(private fetchService: FetchService) {}

  ngOnInit(): void {
    this.fetchService
      .getMyReservation(this.userId)
      .subscribe((res) => console.log(res));
  }
}
