import { Component, OnInit } from '@angular/core';
import { IActivitie } from 'src/app/models/activitie';
import { ACTIVITIES_MOCK } from 'src/app/mocks/activities_mock';

@Component({
  selector: 'pro-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.scss']
})
export class ActivitiesComponent implements OnInit {

  activities: IActivitie[] = ACTIVITIES_MOCK;

  constructor() { }

  ngOnInit(): void {
  }

}
