import { Component, OnInit } from '@angular/core';
import { TRAINING_MOCK } from 'src/app/mocks/training_mock';
import { USER_MOCK } from 'src/app/mocks/user_mock';
import { ITraining } from 'src/app/models/training';
import { IUser } from 'src/app/models/user';

@Component({
  selector: 'pro-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  users: IUser[] = USER_MOCK;

  trainings: ITraining[] = TRAINING_MOCK;

  trainingModel!: ITraining;

  category: string = 'todos';
  filters!: ITraining[];

  constructor() {}

  ngOnInit(): void {
    this.filtrar();
  }

  filtrar(){
    if(this.category == 'todos'){
      this.filters = this.trainings;
    }
    else{
      this.filters =  this.trainings.filter( item => item.category == this.category)
    }
  }
}
