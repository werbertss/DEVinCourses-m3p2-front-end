import { Component, OnInit } from '@angular/core';
import { IActivitie } from 'src/app/models/activitie';
import { ACTIVITIES_MOCK } from 'src/app/mocks/activities_mock';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TrainingService } from 'src/app/services/training/training.service';

@Component({
  selector: 'pro-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.scss']
})
export class ActivitiesComponent implements OnInit {

  activities: IActivitie[] = ACTIVITIES_MOCK;
  formActivitie: FormGroup = new FormGroup({});

  page = 1;
  pageSize = 20;
  newActivitie: IActivitie = {
      title: "",
      description: ""
  }

  constructor(config: NgbModalConfig, private modalService: NgbModal, private formBuilder: FormBuilder, private trainingService:TrainingService) {
		config.backdrop = 'static';
		config.keyboard = false;

    this.formActivitie = formBuilder.group({
      title: ['', [Validators.required]],
      description: ['', [Validators.required]],
  });
	}

  ngOnInit(): void {
  }

  open(content: any) {
		this.modalService.open(content);
	}

  CreateActivitie(){
    this.newActivitie.title = this.formActivitie.value.title
    this.newActivitie.description = this.formActivitie.value.description
    // Chama função na service para executar o post
    this.trainingService.postActivitie(this.newActivitie);
    console.log(this.formActivitie);
    this.modalService.dismissAll();
  }
}
