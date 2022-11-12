import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import SERVER_ROUTE from '../../constants/server';
import { Observable } from 'rxjs';
import { IUser } from 'src/app/models/IUser';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  redirectUrl: string = '';
  isLoggedIn: boolean = false;
  userAuthorized: boolean = false;

  constructor(private http: HttpClient) { }
}
