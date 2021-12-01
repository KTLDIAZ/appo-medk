import { Component, OnInit } from '@angular/core';
import { Emergency } from '../interfaces/pages.interface';

@Component({
  selector: 'app-add-emergency-reservation',
  templateUrl: './add-emergency-reservation.component.html',
  styles: [],
})
export class AddEmergencyReservationComponent implements OnInit {
  public emergency: Emergency = {
    fecha: '',
    observacion: '',
  };

  constructor() {}

  ngOnInit(): void {}

  registerEmergency() {
    console.log(this.emergency);
  }
}
