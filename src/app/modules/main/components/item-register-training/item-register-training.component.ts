import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'pro-item-register-training',
  templateUrl: './item-register-training.component.html',
  styleUrls: ['./item-register-training.component.scss'],
})
export class ItemRegisterTrainingComponent implements OnInit {
  formTraining: FormGroup = new FormGroup({});
  constructor(private formBuilder: FormBuilder) {
    this.formTraining = formBuilder.group({
      title: [''],
      teatcher: [''],
      duration: [''],
      classes: [''],
      url: [''],
      modules: [''],
      description: [''],
    });
  }

  ngOnInit(): void {}
  ShowData() {
    console.log(this.formTraining);
    debugger;
  }
}
