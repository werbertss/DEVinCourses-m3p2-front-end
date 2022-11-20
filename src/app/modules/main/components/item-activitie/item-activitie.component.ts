import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { IActivitie } from 'src/app/models/activitie';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'pro-item-activitie',
  templateUrl: './item-activitie.component.html',
  styleUrls: ['./item-activitie.component.scss']
})
export class ItemActivitieComponent implements OnInit {

  @Input()
  item: IActivitie = {
    id: 0,
    title: '',
    description: ''
  }

  open(content: any) {
		this.modalService.open(content);
	}

  constructor(config: NgbModalConfig, private modalService: NgbModal) {
		config.backdrop = 'static';
		config.keyboard = false;
  	}

  ngOnInit(): void {
  }
}
