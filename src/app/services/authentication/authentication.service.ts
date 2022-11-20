import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import SERVER_ROUTE from 'src/app/constants/server';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  userAuthorized: boolean = false;

  constructor(private http: HttpClient) { }

  verifyLogin(email: string, password: string): Observable<string> {
    return this.http
      .post<string>(SERVER_ROUTE + 'api/Authentications/login', { email, password })
      .pipe();
  }
}
