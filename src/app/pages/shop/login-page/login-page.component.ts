import { Component } from '@angular/core';
import { userAuth } from 'src/app/models/UserAuth.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {
  token: string;

  constructor(private auth:AuthService){}

  signIn(user: userAuth){
    this.auth.signIn(user)
    .subscribe({
      next: (token) => {
        this.token = token;
      }, 
      complete: () => {
        localStorage.setItem("token",this.token);
      }
    });
  }
}
