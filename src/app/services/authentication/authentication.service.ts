import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  redirectUrl: string = '';
  isLoggedIn: boolean = false;
  userAuthorized: boolean = false;

  constructor() { }
}
