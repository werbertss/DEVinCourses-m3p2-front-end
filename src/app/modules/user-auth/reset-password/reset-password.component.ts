import { Component} from '@angular/core';
import { FormControl, FormGroup, Validators, AbstractControl,ValidatorFn } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'pro-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent {

  regexPassword: RegExp = /[^!@#$ %^&*()_+\-=\[\]{};':"\\|,.<>\/?]$/;

  form = new FormGroup({

    password: new FormControl('', [Validators.required, Validators.minLength(8), Validators.pattern(this.regexPassword)]),
    confirm: new FormControl('', [Validators.required, Validators.minLength(8), Validators.pattern(this.regexPassword)]),

  },
    {
      validators: [this.checkMatch('password', 'confirm')]
    }

  );

  userEmails = new FormGroup({
    ResetEmail: new FormControl('',[Validators.required,Validators.email])
  });

  constructor(private authService: AuthenticationService,private route: Router, private userService:  UserService) {}

  submitLogin() {
    if (this.form.invalid) {
      return;
    }

    let email = this.form.controls['email'].value;
    let password = this.form.controls['password'].value;

    this.authService.verifyLogin(email, password).subscribe({
      next: (token) => {
        localStorage.setItem('token', token);
        this.authService.userAuthorized = true;
        this.route.navigateByUrl('home');
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  submitToken() {
    if (!this.userEmails.valid) {
      return;
    }

    let ResetEmail = this.userEmails.controls['ResetEmail'].value;

    this.userService.sendEmail(ResetEmail);

    this.userEmails.reset();
    alert('Token Enviado');

  }

  // Função de verificação de igualdade senha X confirmação de senha
  checkMatch(controlName: string, checkControlName: string): ValidatorFn {
    return (controls: AbstractControl) => {
      const control = controls.get(controlName);
      const checkControl = controls.get(checkControlName);
      if (checkControl?.errors && !checkControl.errors['matching']) {
        return null;
      }

      if (control?.value !== checkControl?.value) {
        controls.get(checkControlName)?.setErrors({ matching: true });
        return { matching: true };
      } else {
        return null;
      }
    };
  }
  // Função de verificação de igualdade senha X confirmação de senha


}
