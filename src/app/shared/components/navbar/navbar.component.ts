import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import jwt_decode from "jwt-decode";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  name: string;
  email: string;
  role: string;

  constructor(public auth: AuthService) {}

  ngOnInit(){
    const token = localStorage.getItem('token');
    if(token != null){
      const decodeedToken: any = jwt_decode(token);
      console.log(decodeedToken);
      this.name = decodeedToken.name;
      this.email = decodeedToken.email;
      this.role = decodeedToken.role;
    }
  }
  signOut(){
    localStorage.removeItem('token');
    window.location.reload();
  }
}
