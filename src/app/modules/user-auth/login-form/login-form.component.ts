import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';

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

  constructor(private authService: AuthenticationService, private route: Router) {}

  ngOnInit(): void {}

  submitLogin() {
    if (this.form.invalid) {
      return;

    }

    let email = this.form.controls['email'].value;
    let password = this.form.controls['password'].value;
    /*
    TODO: FIX AUTHENTICATION SERVICE
    if (this.authService.verifyLogin(email, password)){
      this.route.navigateByUrl('home');
    } else {
      this.authService.isLoggedIn = false;
    }
    */
  }
}
