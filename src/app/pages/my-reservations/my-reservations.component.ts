import { Component, OnInit } from '@angular/core';
import { FetchService } from '../services/fetch.service';
import { AuthService } from '../../authentication/services/auth.service';

@Component({
  selector: 'app-my-reservations',
  templateUrl: './my-reservations.component.html',
  styles: [],
})
export class MyReservationsComponent implements OnInit {
  public userId = '';
  constructor(
    private fetchService: FetchService,
    private authService: AuthService
  ) {
    this.userId = this.authService.currentUser._id;
  }

  ngOnInit(): void {
    this.fetchService
      .getMyReservation(this.userId)
      .subscribe((res) => console.log(res));
  }
}
