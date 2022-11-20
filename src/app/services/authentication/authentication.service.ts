import { HttpClient, HttpHeaders } from '@angular/common/http';
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
    let headers = new HttpHeaders({'Content-Type' : 'application/json'})

    return this.http
      .post<string>(`${SERVER_ROUTE}/api/Authentications/login`, JSON.stringify({ email, password }), {headers: headers})
      .pipe();
  }

  saveLocalStorage(token: string){
    localStorage.setItem('token', token);
  }
}
