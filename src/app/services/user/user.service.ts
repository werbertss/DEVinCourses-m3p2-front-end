import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import SERVER_USERS from '../../constants/server_users';
import { Observable } from 'rxjs';
import { IUser } from 'src/app/models/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  headers = new HttpHeaders({'Content-Type' : 'application/json'});

  constructor(private http: HttpClient) {}

  getUser(token: string): Observable<IUser> {
    return this.http.get<IUser>(`${SERVER_USERS}/${token}`);
  }

  addUser(user: IUser) {
    return this.http.post(SERVER_USERS, user, {headers: this.headers});
  }

  editUser(id: string, user: IUser) {
    return this.http.put<IUser>(`${SERVER_USERS}/${id}`, user);
  }

  sendEmail(email: string) {
    return this.http.post<string>(`${SERVER_USERS}/reset`, email, {headers: this.headers});
  }
}
