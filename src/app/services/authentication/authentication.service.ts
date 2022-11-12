import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { iif, Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import SERVER_ROUTE from 'src/app/constants/server';
import { ILogin } from '../../models/login';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  redirectUrl: string = '';
  isLoggedIn: boolean = false;
  userAuthorized: boolean = false;

  constructor(private http: HttpClient) { }

  verifyLogin(email: string, password: string): Observable<boolean> {
    this.getUserLogin(email)
      .subscribe((credentials) => {
        if (
          email == credentials.email &&
          password == credentials.password
        ){
          this.userAuthorized = true;
        }
      });

    return iif(
      () => this.userAuthorized,
      of(true).pipe(tap(() => this.isLoggedIn = true)),
      of(false).pipe(tap(() => this.isLoggedIn = false))
    )
  }

  private getUserLogin(email: string): Observable<ILogin> {
   return this.http.get<ILogin>(SERVER_ROUTE + email);
  }
}
