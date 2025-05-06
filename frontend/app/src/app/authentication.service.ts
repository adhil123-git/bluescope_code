import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private baseUrl = 'http://localhost:8080/api/auth';

  constructor(private http: HttpClient) {}

  register(user: any): Observable<string> {
    return this.http.post(this.baseUrl + '/register',user ,  { responseType: 'text' });
  }

  login(user: any): Observable<string> {
    return this.http.post(this.baseUrl + '/login',user,{ responseType: 'text' });
  }
}

