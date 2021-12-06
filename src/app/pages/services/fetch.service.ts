import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FetchService {
  private baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) {}

  getHealthCenters(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/centro`);
  }

  getHealthCentersNameAndId(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/centro/centros-doctores`);
  }

  getOffices(id: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/consultorio/${id}`);
  }

  getOfficesByDoctorId(id: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/consultorio/doctor/${id}`);
  }

  getOfficeScheduleById(id: string, date: string): Observable<any> {
    return this.http.get<any>(
      `${this.baseUrl}/consultorio/horarios/${id}/${date}`
    );
  }

  getOfficeById(id: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/consultorio/porId/${id}`);
  }

  getMyReservation(id: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/citas/user/${id}`);
  }

  getMyAgenda(id: string, date: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/citas/doctor/${id}/${date}`);
  }
}
