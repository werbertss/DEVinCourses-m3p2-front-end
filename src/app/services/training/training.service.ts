import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import BASE_TRAINING from 'src/app/constants/trainings';
import { ITraining } from 'src/app/models/training';

@Injectable({
  providedIn: 'root'
})
export class TrainingService {

  training!:ITraining;

  constructor(private http:HttpClient) { }

  returnTraining(){
    return this.training;
  }

  //Métodos Trainings
  getAllTrainings():Observable<ITraining[]>{
    return this.http.get<ITraining[]>(BASE_TRAINING);
  }
  getByCategory(category:string):Observable<ITraining[]>{
    return this.http.get<ITraining[]>(`${BASE_TRAINING}?category=${category}`);
  }
}
