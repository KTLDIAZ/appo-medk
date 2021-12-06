import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
import { ValidarTokenGuard } from './guards/validar-token.guard';

const routes: Routes = [
  {
    path: 'authentication',
    loadChildren: () =>
      import('./authentication/authentication.module').then(
        (m) => m.AuthenticationModule
      ),
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./protected/protected.module').then((m) => m.ProtectedModule),
    canActivate: [ValidarTokenGuard],
    canLoad: [ValidarTokenGuard],
  },
  {
    path: '',
    loadChildren: () =>
      import('./pages/pages.module').then((m) => m.PagesModule),
    canActivate: [ValidarTokenGuard],
    canLoad: [ValidarTokenGuard],
  },
  { path: '**', redirectTo: 'authentication' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRouterModule {}
