import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from './login-form/login-form.component';
import { RegistrationComponent } from './registration/registration.component';
import { UserAuthComponent } from './user-auth.component';

const routes: Routes = [
  {
    path: '',
    component: UserAuthComponent,
    children: [
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
      },
      {
        path: 'login',
        component: LoginFormComponent,
      },
      {
        path: 'cadastro',
        component: RegistrationComponent,
      }
    ]
  },
  {
    path: 'home',
    // loadchildren import main module
    // canactivate login guard
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserAuthRoutingModule { }
