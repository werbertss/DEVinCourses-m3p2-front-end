import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'pro-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.pattern('^[@!#$%-^&*A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ/s ]*$')]),
    password: new FormControl('', [Validators.required, Validators.minLength(8), Validators.pattern('^[0-9a-zA-Z]{8,}$')]),
  });

  submitted = false;

  notEmail: boolean = false;
  notPassword: boolean = false;
  regexEmail: RegExp = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
  regexPassword: RegExp = /[0-9a-zA-Z]{8,}$/;

  email: string = "email@teste.com";
  password: string = "12345678";

  constructor() {

  }

  ngOnInit(): void {

  }


  submitLogin() {
    this.submitted = true;
    if (this.form.invalid) {
      return;

    }
    alert('Sucesso')

  }

  validateEmail() {
    if (!this.regexEmail.test(this.email)) {
      this.notEmail = true;
    } else {
      this.notEmail = false;
    }

  }

  validatePassword() {
    if (!this.regexPassword.test(this.password)) {
      this.notPassword = true;
    } else {
      this.notPassword = false;
    }
  }


}
