import { Component, OnInit } from '@angular/core';
import { FetchService } from '../services/fetch.service';
import { HealthCenter } from '../interfaces/pages.interface';

@Component({
  selector: 'app-health-centers',
  templateUrl: './health-centers.component.html',
  styles: [],
})
export class HealthCentersComponent implements OnInit {
  public healthCenters: HealthCenter[] = [];

  constructor(private fetchService: FetchService) {}

  ngOnInit(): void {
    this.fetchService
      .getHealthCenters()
      .subscribe((res) => (this.healthCenters = res));
  }
}
