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
    let header = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', `Bearer ${token}`);

    return this.http.get<IUser>(`${SERVER_USERS}`, {headers: header});
  }

  addUser(user: IUser){
   return this.http.post(SERVER_USERS, user, {headers: this.headers}).subscribe();
  }

  editUser(user: IUser, id?: number) {
    return this.http.put<IUser>(`${SERVER_USERS}/${id}`, user).subscribe();
  }

  sendEmail(email: string){
    var emailJSON = JSON.stringify(email);
    return this.http.post(`${SERVER_USERS}/reset`, emailJSON,{headers: this.headers}).subscribe();
  }

  sendToken(token: string, password:string ){
    return this.http.post(`${SERVER_USERS}/token`, {token,password},{headers: this.headers}).subscribe();
  }
}
