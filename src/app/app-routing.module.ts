import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    // Rota provisória para visualização de componentes do módulo
    path: '',
    loadChildren: () =>
      import('./modules/user-auth/user-auth.module').then((m) => m.UserAuthModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
