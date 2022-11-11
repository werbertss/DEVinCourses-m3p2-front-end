import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrainingComponent } from './components/training/training.component';
import { MainComponent } from './main.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        component:HomeComponent,
      },
      {
        path: 'trainings',
        component: TrainingComponent
      },
      /* {
        path: 'video',
        component: 
      } */
      // Lugar para rotas internas do módulo
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
