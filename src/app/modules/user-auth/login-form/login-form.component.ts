import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'pro-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  regexPassword: RegExp = /[^!@#$ %^&*()_+\-=\[\]{};':"\\|,.<>\/?]$/;

  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.pattern(this.regexPassword)]),

  })

  submitted = false;
  // Mock
  // email: string = "email@teste.com";
  // password: string = "12345678";

  constructor() {

  }

  ngOnInit(): void {
    console.log(this.form);
  }

  submitLogin() {
    this.submitted = true;
    if (this.form.invalid) {
      return;

    }
    alert('Sucesso')

  }
}
