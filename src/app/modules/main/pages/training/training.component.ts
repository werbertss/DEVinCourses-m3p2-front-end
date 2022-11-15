import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TRAININGBYUSER_MOCK } from 'src/app/mocks/trainingsByUser_mock';
import { TRAINING_MOCK } from 'src/app/mocks/training_mock';
import { ITraining } from 'src/app/models/training';
import { ITraningByUser } from 'src/app/models/trainingByUser';
import { TrainingService } from '../../services/training/training.service';

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

  page = 1;
  pageSize = 20;

  constructor(private trainingService:TrainingService,
    private router:Router,) {}
  
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

  selectTraining(training:ITraining){
    this.trainingService.training = training;
    this.router.navigate(['main/video']);
  }

}



  
