import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, retry, throwError } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import SERVER_REGISTRATIONS from 'src/app/constants/server_registrations';
import SERVER_TRAININGS from 'src/app/constants/server_trainings';
import SERVER_USERS from 'src/app/constants/server_users';
import { IRegistration } from 'src/app/models/registration';
import { ITraining } from 'src/app/models/training';
import { IUser } from 'src/app/models/user';

@Injectable({
  providedIn: 'root'
})
export class TrainingService {
  token:string | null = localStorage.getItem('token');


  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    token: new HttpHeaders({ 'Autorization': 'bearer'+ this.token})
  }

  training!:ITraining;

  constructor(private http:HttpClient) { }

  returnTraining(){
    return this.training;
  }

  //MetodoUser
  getUserByToken(token: string | null): Observable<IUser> {
    return this.http.get<IUser>(`${SERVER_USERS}/authenticated`,this.httpOptions);
  }

  //Métodos Trainings
  getAllTrainings():Observable<ITraining[]>{
    return this.http.get<ITraining[]>(SERVER_TRAININGS, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }
  getByCategory(category:string):Observable<ITraining[]>{
    return this.http.get<ITraining[]>(`${SERVER_TRAININGS}?category=${category}`, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  getTrainingsByUser(id:number| undefined):Observable<ITraining[]>{
    return this.http.get<ITraining[]>(`${SERVER_USERS}/${id}/Trainings`, this.httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError)
    )
  }

  //metodos Registrations
  getRegistrationByUser(id:number,status:string):Observable<IRegistration[]>{
    return this.http.get<IRegistration[]>(`${SERVER_USERS}/${id}/Registrations?status=${status}`)
    .pipe(
      retry(2),
      catchError(this.handleError)
    )
  }

  postRegistration(registration:IRegistration){
    return this.http.post<IRegistration>(SERVER_REGISTRATIONS, registration, this.httpOptions)
    .pipe(
      catchError(this.handleError)
    )
  }

  //metodos Modulos
  getModulesByTrainingId(id:number):Observable<any[]>{
    return this.http.get<any[]>(`${SERVER_TRAININGS}/${id}/modules`, this.httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError)
    )
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Erro ocorreu no lado do client
      errorMessage = error.error.message;
    } else {
      // Erro ocorreu no lado do servidor
      errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  };
}
