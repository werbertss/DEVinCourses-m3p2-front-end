import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import SERVER_ROUTE from '../../constants/server';
import { Observable } from 'rxjs';
import { IUser } from 'src/app/models/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  getUser(token: string): Observable<IUser> {
    return this.http.get<IUser>(SERVER_ROUTE + token);
  }

  addUser(user: IUser): void {
    this.http.post(SERVER_ROUTE + 'api/Users', user);
  }

  editUser(id: string, user: IUser): void {
    this.http.put<IUser>(SERVER_ROUTE + 'api/Users/' + id, user);
  }

  sendEmail(email: string): void {
    this.http.post<string>(SERVER_ROUTE + 'api/Users/reset', email);
  }
}
