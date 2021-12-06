import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CreateService {
  private baseUrl: string = environment.baseUrl;
  private userId: string = '61ad82eb70e3de391f5b6f15'; //user

  constructor(private http: HttpClient) {}

  createHealthCenter(data: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/centro`, data);
  }

  createOffice(data: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/consultorio`, data);
  }

  updateOfficeSchedule(data: any, id: string): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/consultorio/${id}`, data);
  }

  createReservation(data: any): Observable<any> {
    data.idUser = this.userId;
    return this.http.post<any>(`${this.baseUrl}/cita`, data);
  }
}
