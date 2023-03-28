import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { loginResponse } from '../models/loginResponse.model';
import { Member } from '../models/Member.model';
import { userAuth } from '../models/UserAuth.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  signIn(user: userAuth): Observable<loginResponse>{
    //TODO: make api return object with member id and token
    return this.http.post<loginResponse>(`${environment.baseApiUrl}/api/Auth/login`,user);
  }
  register(member: Member){
    return this.http.post<Member>(`${environment.baseApiUrl}/api/Auth/register`,member);
  }
}
