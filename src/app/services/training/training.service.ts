import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, retry, throwError } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import BASE_TRAINING from 'src/app/constants/trainings';
import { IRegistration } from 'src/app/models/registration';
import { ITraining } from 'src/app/models/training';

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

  //Métodos Trainings
  getAllTrainings():Observable<ITraining[]>{
    return this.http.get<ITraining[]>(BASE_TRAINING, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }
  getByCategory(category:string):Observable<ITraining[]>{
    console.log(`${BASE_TRAINING}?category=${category}`)
    return this.http.get<ITraining[]>(`${BASE_TRAINING}?category=${category}`, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  getTrainingsByUser(id:number):Observable<ITraining[]>{
    return this.http.get<ITraining[]>(`https://localhost:7181/api/Users/${id}/Trainings`, this.httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError)
    )
  }
 
  getRegistrationByUser(id:number,status:string):Observable<IRegistration[]>{
    return this.http.get<IRegistration[]>(`https://localhost:7181/api/Users/${id}/Registrations?status=${status}`)
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
