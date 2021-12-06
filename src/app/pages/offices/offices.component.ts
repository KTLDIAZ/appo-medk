import { Component, OnInit } from '@angular/core';
import { FetchService } from '../services/fetch.service';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Offices } from '../interfaces/pages.interface';

@Component({
  selector: 'app-offices',
  templateUrl: './offices.component.html',
  styles: [],
})
export class OfficesComponent implements OnInit {
  public offices: Offices[] = [];

  constructor(
    private fetchService: FetchService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(switchMap(({ id }) => this.fetchService.getOffices(id)))
      .subscribe((res) => (this.offices = res));
  }
}
