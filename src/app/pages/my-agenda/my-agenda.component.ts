import { Component, OnInit } from '@angular/core';
import { FetchService } from '../services/fetch.service';
import { AuthService } from '../../authentication/services/auth.service';

@Component({
  selector: 'app-my-agenda',
  templateUrl: './my-agenda.component.html',
  styles: [],
})
export class MyAgendaComponent implements OnInit {
  public userId = '';
  public date = `${new Date().getFullYear()}-${
    new Date().getMonth() + 1
  }-${new Date().getDate()}`;
  constructor(
    private fetchService: FetchService,
    private authService: AuthService
  ) {
    this.userId = this.authService.currentUser._id;
  }

  ngOnInit(): void {
    this.fetchService
      .getMyAgenda(this.userId, this.date)
      .subscribe((res) => console.log(res));
  }

  changeAgenda() {
    this.fetchService
      .getMyAgenda(this.userId, this.date.toString())
      .subscribe((res) => console.log(res));
  }
}
