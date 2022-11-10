import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserAuthComponent } from './user-auth.component';

const routes: Routes = [
  {
    path: '',
    component: UserAuthComponent,
    children: [
      // Lugar para rotas internas do módulo
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserAuthRoutingModule { }
