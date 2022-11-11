import { Component, OnInit } from '@angular/core';
import { TRAININGBYUSER_MOCK } from 'src/app/mocks/trainingsByUser_mock';
import { TRAINING_MOCK } from 'src/app/mocks/training_mock';
import { ITraining } from 'src/app/models/training';
import { ITraningByUser } from 'src/app/models/trainingByUser';

@Component({
  selector: 'pro-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.scss']
})
export class TrainingComponent implements OnInit {

  trainings: ITraining[] = TRAINING_MOCK;
  trainingsByUser: ITraningByUser[] = TRAININGBYUSER_MOCK;

  status: string = 'todos';
  filters!: ITraningByUser[];

  constructor() {}
  
  ngOnInit(): void {
    this.filtrar();
  }

  filtrar() {
    if (this.status != 'todos') {
      this.filters = this.trainingsByUser.filter(item => item.status == this.status )
    }
    else {

      this.filters = this.trainingsByUser;
    }
  }

}



  
