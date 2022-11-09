import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'pro-form-inputs',
  templateUrl: './form-inputs.component.html',
  styleUrls: ['./form-inputs.component.scss']
})
export class FormInputsComponent implements OnInit {
  @Input() label: string = 'CARREGANDO';
  @Input() type: string = 'text';
  @Input() placeholder: string = '';
  @Input() required?: boolean = true;
  @Input() value?: number | string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
