import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import jwt_decode from "jwt-decode";
import { ProductsService } from 'src/app/services/products.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  name: string;
  email: string;
  role: string;
  searchFormGroup: FormGroup

  constructor(public auth: AuthService,private productService: ProductsService,private router: Router) {
    this.searchFormGroup = new FormGroup({
      searchBox: new FormControl()
    });
  }

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
  search(){
    this.productService.searchProduct(this.searchFormGroup.get('searchBox')?.value);
    this.router.navigate(['/product']);
  }
}
