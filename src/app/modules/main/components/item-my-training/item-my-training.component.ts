import { Component, Input, OnInit } from '@angular/core';
import { ITraining } from 'src/app/models/training';
import { AlertService } from '../../services/alert.service';

@Component({
  selector: 'pro-item-my-training',
  templateUrl: './item-my-training.component.html',
  styleUrls: ['./item-my-training.component.scss']
})
export class ItemMyTrainingComponent implements OnInit {

  @Input()
  item: ITraining = {
    id: 0,
    url: '',
    title: '',
    description: '',
    teacher: '',
    duration: 0,
    status: '',
    category: '',
    date:new Date(),
  };

  constructor(private alertService:AlertService) { }

  ngOnInit(): void {
  }

  removeTraining(){
    this.alertService.alertDeleteTraining();
  }

}
