import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, retry, throwError } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import BASE_REGISTRATIONS from 'src/app/constants/base_registrations';
import BASE_TRAININGS from 'src/app/constants/base_trainings';
import BASE_USERS from 'src/app/constants/base_users';
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
    return this.http.get<IUser>(`${BASE_USERS}/authenticated`,this.httpOptions);
  }

  //Métodos Trainings
  getAllTrainings():Observable<ITraining[]>{
    return this.http.get<ITraining[]>(BASE_TRAININGS, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }
  getByCategory(category:string):Observable<ITraining[]>{
    return this.http.get<ITraining[]>(`${BASE_TRAININGS}?category=${category}`, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  getTrainingsByUser(id:number| undefined):Observable<ITraining[]>{
    return this.http.get<ITraining[]>(`${BASE_USERS}/${id}/Trainings`, this.httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError)
    )
  }
 
  //metodos Registrations
  getRegistrationByUser(id:number,status:string):Observable<IRegistration[]>{
    return this.http.get<IRegistration[]>(`${BASE_USERS}/${id}/Registrations?status=${status}`, this.httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError)
    )
  }

  postRegistration(registration:IRegistration){
    return this.http.post<IRegistration>(BASE_REGISTRATIONS, registration, this.httpOptions)
    .pipe(
      catchError(this.handleError)
    )
  }

  //metodos Modulos
  getModulesByTrainingId(id:number):Observable<any[]>{
    return this.http.get<any[]>(`https://localhost:7181/api/Trainings/${id}/modules`, this.httpOptions)
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
