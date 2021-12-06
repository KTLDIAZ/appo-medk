import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddHealthCenterComponent } from './add-health-center/add-health-center.component';
import { MyReservationsComponent } from './my-reservations/my-reservations.component';
import { AddEmergencyReservationComponent } from './add-emergency-reservation/add-emergency-reservation.component';
import { EmergencyReservationComponent } from './emergency-reservation/emergency-reservation.component';
import { MyOfficesComponent } from './my-offices/my-offices.component';
import { MyAgendaComponent } from './my-agenda/my-agenda.component';
import { AddOfficeComponent } from './add-office/add-office.component';
import { AddReservationComponent } from './add-reservation/add-reservation.component';
import { OfficesComponent } from './offices/offices.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {path: 'Health', component: AddHealthCenterComponent},
      {
        path: 'mis-citas',
        component: MyReservationsComponent,
       },
      {
        path: 'crear-centro-salud',
         component: AddHealthCenterComponent,
       },
       {
         path: 'registrar-cita-emergencia',
        component: AddEmergencyReservationComponent,
       },
       {
         path: 'citas-emergencia',
        component: EmergencyReservationComponent,
       },
       {
        path: 'mis-consultorios',
        component: MyOfficesComponent,
      },
      {
         path: 'crear-consultorio',
       component: AddOfficeComponent,
      },
      {
         path: 'mi-agenda',
         component: MyAgendaComponent,
       },
      {
        path: 'editar-consultorio/:id',
        component: AddOfficeComponent,
       },
       {
        path: 'consultorio/:id',
        component: AddReservationComponent,
      },
      {
        path: ':id',
         component: OfficesComponent,
       },
      {path: '**', redirectTo: 'Health'},

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
