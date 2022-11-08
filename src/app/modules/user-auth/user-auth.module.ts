import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserAuthRoutingModule } from './user-auth-routing.module';
import { UserAuthComponent } from './user-auth.component';


@NgModule({
  declarations: [
    UserAuthComponent
  ],
  imports: [
    CommonModule,
    UserAuthRoutingModule
  ]
})
export class UserAuthModule { }
