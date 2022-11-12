import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserAuthRoutingModule } from './user-auth-routing.module';
import { UserAuthComponent } from './user-auth.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegistrationComponent } from './registration/registration.component';

@NgModule({
  declarations: [
    UserAuthComponent,
    LoginFormComponent,
    RegistrationComponent,
  ],
  imports: [
    CommonModule,
    UserAuthRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class UserAuthModule { }
