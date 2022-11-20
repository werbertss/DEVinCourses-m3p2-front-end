import { Component, OnInit } from '@angular/core';
import { TRAININGBYUSER_MOCK } from 'src/app/mocks/trainingsByUser_mock';
import { TRAINING_MOCK } from 'src/app/mocks/training_mock';
import { IRegistration } from 'src/app/models/registration';
import { ITraining } from 'src/app/models/training';
import { ITraningByUser } from 'src/app/models/trainingByUser';
import { TrainingService } from 'src/app/services/training/training.service';

@Component({
  selector: 'pro-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.scss'],
})
export class TrainingComponent implements OnInit {
  trainings: ITraining[] = TRAINING_MOCK;
  trainingsByUser: ITraining[] = []; //TRAININGBYUSER_MOCK;

  status: string = 'todos';
  filters: ITraining[] = [];
  userId!: number;

  page = 1;
  pageSize = 20;

  constructor(private trainingService: TrainingService) {}

  ngOnInit(): void {
    this.getMyTrainings(1);
  }

  getMyTrainings(id: number) {
    this.trainingService
      .getTrainingsByUser(id)
      .subscribe((trainingsByUser: ITraining[]) => {
        this.trainingsByUser = trainingsByUser;
        this.userId = id;
        this.filtrar();
      });
  }

  getMyTrainingsByStatus(id: number, status: string) {
    this.trainingService
      .getRegistrationByUser(id, status)
      .subscribe((registration: IRegistration[]) => {
        for (let index = 0; index < this.trainingsByUser.length; index++) {
          if (
            this.trainingsByUser[index].id == registration[index]?.trainingId
          ) {
            this.filters.push(this.trainingsByUser[index]);
          }
        }
      });
  }

  getRecentTrainingsByUser(id: number) {
    this.trainingService
      .getRecentTrainingsByUser(id)
      .subscribe((registration: IRegistration[]) => {
        for (let i = 0; i < registration.length; i++) {
          this.trainingsByUser.forEach((item) => {
            if (item.id == registration[i].trainingId) {
              this.filters.push(item);
            }
          });
        }
      });
  }

  filtrar() {
    this.filters = [];
    if (this.status == 'todos') {
      this.filters = this.trainingsByUser;
    } else if (this.status === 'Recentes') {
      this.getRecentTrainingsByUser(this.userId);
    } else {
      this.getMyTrainingsByStatus(this.userId, this.status);
    }
  }
}
