import { Component, OnInit } from '@angular/core';
import { HealthCenter } from '../interfaces/pages.interface';

@Component({
  selector: 'app-add-health-center',
  templateUrl: './add-health-center.component.html',
  styles: [],
})
export class AddHealthCenterComponent implements OnInit {
  public healthCenter: HealthCenter = {
    nombre: '',
    ubicacion: '',
  };

  constructor() {}

  ngOnInit(): void {}
  registerHealthCenter() {
    console.log(this.healthCenter);
  }
}
