import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrainingVideoComponent } from './pages/training-video/training-video.component';

import { TrainingComponent } from './pages/training/training.component';
import { MainComponent } from './main.component';
import { HomeComponent } from './pages/home/home.component';
import { RegisterTrainingComponent } from './pages/register-training/register-training.component';
import { ItemRegisterTrainingComponent } from './components/item-register-training/item-register-training.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'trainings',
        component: TrainingComponent,
      },
      {
        path: 'video',
        component: TrainingVideoComponent,
      },
      {
        path: 'register',
        component: ItemRegisterTrainingComponent,
      },
      // Lugar para rotas internas do módulo
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
