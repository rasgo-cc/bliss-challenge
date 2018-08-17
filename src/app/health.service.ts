import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Health } from './health'

@Injectable({
  providedIn: 'root'
})
export class HealthService {

  healthUrl = 'https://private-bbbe9-blissrecruitmentapi.apiary-mock.com/health';

  constructor(
    private http: HttpClient
  ) { }

  getStatus(): Observable<Health> {
    return this.http.get<Health>(this.healthUrl);
  }
}
