import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

const configuredApiUrl = (globalThis as { __API_URL__?: string }).__API_URL__;

export interface ContactPayload {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormSubmitResponse {
  success: boolean | string;
  message?: string;
}

@Injectable({ providedIn: 'root' })
export class PortfolioService {
  private http = inject(HttpClient);
  private api = `${configuredApiUrl || 'http://localhost:8080'}/api`;
  private readonly contactFormUrl = 'https://formsubmit.co/ajax/subashgoud12345@gmail.com';

  profile(): Observable<any> { return this.http.get(`${this.api}/profile`); }
  experience(): Observable<any> { return this.http.get(`${this.api}/experience`); }
  education(): Observable<any> { return this.http.get(`${this.api}/education`); }
  skills(): Observable<any> { return this.http.get(`${this.api}/skills`); }
  projects(): Observable<any> { return this.http.get(`${this.api}/projects`); }
  certifications(): Observable<any> { return this.http.get(`${this.api}/certifications`); }
  sendMessage(payload: ContactPayload): Observable<FormSubmitResponse> {
    return this.http.post<FormSubmitResponse>(this.contactFormUrl, {
      ...payload,
      _subject: `Portfolio contact: ${payload.subject}`,
      _template: 'table'
    }).pipe(
      map(response => {
        if (response.success !== true && response.success !== 'true') {
          throw new Error(response.message || 'The email service did not accept the message.');
        }
        return response;
      })
    );
  }
}
