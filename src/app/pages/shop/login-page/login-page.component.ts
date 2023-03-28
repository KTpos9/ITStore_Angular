import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { loginResponse } from 'src/app/models/loginResponse.model';
import { userAuth } from 'src/app/models/UserAuth.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {
  token: loginResponse;
  loginFormGroup: FormGroup;

  constructor(private auth: AuthService, private router: Router) {
    this.initForm();
  }

  initForm() {
    this.loginFormGroup = new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }

  signIn() {
    if (this.loginFormGroup.valid) {
      let user: userAuth = {
        email: this.loginFormGroup.get('email')?.value,
        password: this.loginFormGroup.get('password')?.value
      }
      this.auth.signIn(user)
        .subscribe({
          next: (token) => {
            this.token = token;
            console.log(token);
          },
          /*the error return HttpErrorResponse object as follow
            {
              "headers": {
                  "normalizedNames": {},
                  "lazyUpdate": null
              },
              "status": 400,
              "statusText": "OK",
              "url": "**url**",
              "ok": false,
              "name": "HttpErrorResponse",
              "message": "Http failure response for **url**: 400 OK",
              "error": {
                  "message": "Invalid Email or Password",
                  "token": ""
              }
            }
          */
          error: (response) => {
            console.log(response);
            alert(response.error.message);
          },
          complete: () => {
            localStorage.setItem("token", this.token.token);
            console.log('token stored!', this.token.token);
            this.router.navigate(['/']);
          }
        });
    }
  }
}
