import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import SERVER_ROUTE from '../../constants/server';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }
}
