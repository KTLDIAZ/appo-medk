import { Component, OnInit } from '@angular/core';
import { Office } from '../interfaces/pages.interface';

@Component({
  selector: 'app-add-office',
  templateUrl: './add-office.component.html',
  styles: [],
})
export class AddOfficeComponent implements OnInit {
  public office: Office = {
    doctor: '',
    centroSalud: '',
    indicacciones: '',
  };

  constructor() {}

  ngOnInit(): void {}

  registerOficce() {
    console.log(this.office);
  }
}
