import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface ContactPayload {
  name: string;
  email: string;
  subject: string;
  message: string;
}

@Injectable({ providedIn: 'root' })
export class PortfolioService {
  private http = inject(HttpClient);
  private api = 'http://localhost:8080/api';

  profile(): Observable<any> { return this.http.get(`${this.api}/profile`); }
  experience(): Observable<any> { return this.http.get(`${this.api}/experience`); }
  education(): Observable<any> { return this.http.get(`${this.api}/education`); }
  skills(): Observable<any> { return this.http.get(`${this.api}/skills`); }
  projects(): Observable<any> { return this.http.get(`${this.api}/projects`); }
  certifications(): Observable<any> { return this.http.get(`${this.api}/certifications`); }
  sendMessage(payload: ContactPayload): Observable<any> {
    return this.http.post(`${this.api}/contact`, payload);
  }
}
