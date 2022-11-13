import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { iif, Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import SERVER_ROUTE from 'src/app/constants/server';
import { IUser } from '../../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  redirectUrl: string = '';
  isLoggedIn: boolean = false;
  userAuthorized: boolean = false;

  constructor(private http: HttpClient) { }

  /*
  // TODO: FIX LOGIN, NOT WORKING
  // RETURN IIF HAS TO WAIT FOR SUBSCRIBE TO HAPPEN
  verifyLogin(email: string, password: string): Observable<boolean> {
    this.http.get<IUser>(SERVER_ROUTE)
      .subscribe((users) => {
        if (
          email == users.email &&
          password == users.password
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
  */
}
