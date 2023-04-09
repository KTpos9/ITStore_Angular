import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Member } from 'src/app/models/Member.model';
import { MemberService } from 'src/app/services/member.service';

@Component({
  selector: 'app-update-member',
  templateUrl: './update-member.component.html',
  styleUrls: ['./update-member.component.scss']
})
export class UpdateMemberComponent {
  @Input() showModal: boolean;
  @Input() selectedMember: Member | null;

  @Output() showModalChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() memberUpdated: EventEmitter<void> = new EventEmitter<void>();

  Roles: string[] = ['Administrator', 'User'];

  constructor(private memberService: MemberService) { }

  closeModal() {
    this.selectedMember = null;
    this.showModal = false;
    this.showModalChange.emit(this.showModal);
  }

  updateMember() {
    if (this.selectedMember) {
      this.memberService.updateMember(this.selectedMember).subscribe({
        next: (member) => {
          this.closeModal();
          this.memberUpdated.emit(); // emit an event
        },
        error: (res) => {
          console.log("Error:", res)
        },
        complete: () => {
          console.log("Member update successfully");
        }
      });
    }
  }
}
