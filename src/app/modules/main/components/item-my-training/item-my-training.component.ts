import { Component, Input, OnInit } from '@angular/core';
import { ITraining } from 'src/app/models/training';

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
  };
  
  constructor() { }

  ngOnInit(): void {
  }

}
