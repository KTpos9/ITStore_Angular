import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { Member } from '../models/Member.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MemberService {
  members: Member[];
  //inject Httpclient for calling the api
  constructor(private http: HttpClient) {
    this.getMembers().subscribe({
      next: (members) => {
        this.members = members
        console.log(members);
      },
      error: (response) => {
        console.log(response);
        console.log(this.members);
      }
    });
  }

  //call the api to get the product as an Observable[]
  getMembers(): Observable<Member[]>{
    return this.http.get<Member[]>(`${environment.baseApiUrl}/api/Member`);
  }

  addMember(member: Member): Observable<Member>{
    return this.http.post<Member>(`${environment.baseApiUrl}/api/Member`, member);
  }

  updateMember(member: Member): Observable<Member>{
    return this.http.put<Member>(`${environment.baseApiUrl}/api/Member/${member.MemberId}`, member);
  }

  deleteMember(MemberId: number): Observable<void> {
    return this.http.delete<void>(`${environment.baseApiUrl}/api/Member/${MemberId}`);
  }
}
