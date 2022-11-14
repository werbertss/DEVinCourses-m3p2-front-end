import { Component, OnInit } from '@angular/core';
import { USER_MOCK } from 'src/app/mocks/user_mock';
import { IUser } from 'src/app/models/user';

@Component({
  selector: 'pro-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  users: IUser[] = USER_MOCK;

  constructor() { }

  ngOnInit(): void {
  }

}
