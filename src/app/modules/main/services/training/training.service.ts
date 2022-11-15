import { Injectable } from '@angular/core';
import { ITraining } from 'src/app/models/training';

@Injectable({
  providedIn: 'root'
})
export class TrainingService {

  training!:ITraining;

  constructor() { }

  returnTraining(){
    return this.training;
  }
}
