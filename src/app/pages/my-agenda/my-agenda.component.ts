import { Component, OnInit } from '@angular/core';
import { FetchService } from '../services/fetch.service';

@Component({
  selector: 'app-my-agenda',
  templateUrl: './my-agenda.component.html',
  styles: [],
})
export class MyAgendaComponent implements OnInit {
  public userId = '61ad388b70baa6fea82c37e5';
  public date = `${new Date().getFullYear()}-${
    new Date().getMonth() + 1
  }-${new Date().getDate()}`;
  constructor(private fetchService: FetchService) {}

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
