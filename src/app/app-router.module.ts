import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './authentication/login/login.component';
import { RegisterComponent } from './authentication/register/register.component';
import { HomeComponent } from './pages/home/home.component';
import { HealthCentersComponent } from './pages/health-centers/health-centers.component';
import { MyReservationsComponent } from './pages/my-reservations/my-reservations.component';
import { AddHealthCenterComponent } from './pages/add-health-center/add-health-center.component';
import { AddEmergencyReservationComponent } from './pages/add-emergency-reservation/add-emergency-reservation.component';
import { EmergencyReservationComponent } from './pages/emergency-reservation/emergency-reservation.component';
import { MyOfficesComponent } from './pages/my-offices/my-offices.component';
import { MyAgendaComponent } from './pages/my-agenda/my-agenda.component';
import { AddOfficeComponent } from './pages/add-office/add-office.component';
import { AddReservationComponent } from './pages/add-reservation/add-reservation.component';
import { OfficesComponent } from './pages/offices/offices.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'register',
        component: RegisterComponent,
      },
      {
        path: 'centros-salud',
        component: HealthCentersComponent,
      },
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
        path: '',
        component: OfficesComponent,
      },
    ],
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRouterModule {}
