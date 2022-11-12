import { Component, OnInit } from '@angular/core';
import { USER_MOCK } from 'src/app/mocks/user_mock';
import { IUser } from 'src/app/models/user';

@Component({
  selector: 'pro-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  users: IUser[] = USER_MOCK;
  
  constructor() { }

  ngOnInit(): void {
  }

}
