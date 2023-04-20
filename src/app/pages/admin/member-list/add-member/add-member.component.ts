import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
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

  constructor(private memberService: MemberService, private snackBar: MatSnackBar) {
    this.newMember = {} as Member;
  }

  addMember() {
    this.memberService.addMember(this.newMember).subscribe({
      next: (response) => {
        console.log("Member added successfully:", response);
        this.snackBar.open('Member added successfully', 'Close', { duration: 2000 });
        this.newMember = {} as Member;
      },
      error: (error) => {
        console.error("Error:", error);
      }
    });
  }
}
