import { Component, OnInit } from '@angular/core';
import { ITraningByUser } from 'src/app/models/trainingByUser';

@Component({
  selector: 'pro-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.scss']
})
export class TrainingComponent implements OnInit {

  status: string = 'todos';
  filters!: ITraningByUser[];

  constructor() { }

  ngOnInit(): void {
  }

}
