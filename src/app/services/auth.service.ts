import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { loginResponse } from '../models/loginResponse.model';
import { Member } from '../models/Member.model';
import { userAuth } from '../models/UserAuth.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {
    const token = localStorage.getItem('token');
    this.isSignedIn = !!token;
    console.log(this.isSignedIn);
   }
  isSignedIn: boolean = false;

  signIn(user: userAuth): Observable<loginResponse>{
    //TODO: make api return object with member id and token
    return this.http.post<loginResponse>(`${environment.baseApiUrl}/api/Auth/login`,user).pipe(
      // tap use for side effects(apply a function to that data but returns the original data)
      tap((response) => {
        localStorage.setItem("token", response.token);
        console.log('token stored!', response.token);
        this.isSignedIn = true;
      })
    );
  }
  register(member: Member){
    return this.http.post<Member>(`${environment.baseApiUrl}/api/Auth/register`,member);
  }
}
