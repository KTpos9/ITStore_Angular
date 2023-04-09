import { Component } from '@angular/core';
import { Member } from 'src/app/models/Member.model';
import { MemberService } from 'src/app/services/member.service';

@Component({
  selector: 'app-add-member',
  templateUrl: './add-member.component.html',
  styleUrls: ['./add-member.component.scss']
})
export class AddMemberComponent {
  newMember: Member;
  Roles: string[] = ['Administrator', 'User'];

  constructor(private memberService: MemberService) {
    this.newMember = {} as Member;
  }

  addMember() {
    this.memberService.addMember(this.newMember).subscribe(
      (response) => {
        console.log("Member add successfully:",response);
      },
      (error) => {
        console.error("Error:",error);
      }
    );
  }
}
