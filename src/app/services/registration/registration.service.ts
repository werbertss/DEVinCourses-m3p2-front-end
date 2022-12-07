import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry } from 'rxjs';
import SERVER_USERS from 'src/app/constants/server_users';
import { IRegistration } from 'src/app/models/registration';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  token: string | null = localStorage.getItem('token');

  headers = new HttpHeaders()
  .set('Content-Type', 'application/json')
  .set('Authorization', `Bearer ${this.token}`)


  constructor(private http: HttpClient) { }


  getTotal(id:number| undefined):Observable<IRegistration[]>{
    return this.http.get<IRegistration[]>(`${SERVER_USERS}/${id}/userId`, {headers: this.headers})

    
  }
}
