import { Component, OnInit } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TRAININGBYUSER_MOCK } from 'src/app/mocks/trainingsByUser_mock';
import { TRAINING_MOCK } from 'src/app/mocks/training_mock';
import { USER_MOCK } from 'src/app/mocks/user_mock';
import { ITraining } from 'src/app/models/training';
import { IUser } from 'src/app/models/user';

import * as bootstrap from 'bootstrap';
import { Modal } from 'bootstrap';

@Component({
  selector: 'pro-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  users: IUser[] = USER_MOCK;

  trainings: ITraining[] = TRAINING_MOCK;

  trainingModel!: ITraining;

  category: string = 'todos';
  filters!: ITraining[];

  page = 1;
  pageSize = 20;

  element: any;
  testModal: Modal | undefined;

  constructor(
    private config: NgbModalConfig, 
    private modalService: NgbModal) {
    // customize default values of modals used by this component tree
    config.backdrop = 'static';
    config.keyboard = false;
  }

  openXl(content: any, training:ITraining) {
    this.trainingModel = training;
    this.modalService.open(content, {
      size: 'lg',
      centered: true,
      scrollable: true,
    });
  }


  ngOnInit(): void {
    this.filtrar();
  }

  filtrar(){
    if(this.category == 'todos'){
      this.filters = this.trainings;
    }
    else{
      this.filters =  this.trainings.filter(item => item.category == this.category)
    }
  }

  estaMatriculado(idDoCursoClicado:number):void {
    
    //cursos do usuário estático, id : 1
    var usuario = TRAININGBYUSER_MOCK.find(x => x.userId == 1);
    
    if(usuario?.id == idDoCursoClicado){
      window.alert("Você já está matriculado neste curso.");
    }
    
  }

  OpenDetails(){
    this.element = document.getElementById('trainingDetails');
    let modal = new bootstrap.Modal(this.element);
    modal.show();
  } 

  Suspender(){

  }

}
