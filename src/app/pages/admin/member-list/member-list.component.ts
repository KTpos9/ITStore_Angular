import { Component, OnInit, ViewChild } from '@angular/core';
import { Member } from 'src/app/models/Member.model';
import { MemberService } from 'src/app/services/member.service';
import { UpdateMemberComponent } from './update-member/update-member.component';

import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.scss']
})
export class MemberListComponent implements OnInit{
  dataSource: MatTableDataSource<Member>;
  displayedColumns: string[] = ['MemberId', 'FirstName', 'LastName', 'Email', 'Password','Role']

  @ViewChild(UpdateMemberComponent) updateMemberModal: UpdateMemberComponent;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  members: Member[];
  showModal = false;
  selectedMember: Member;

  constructor(private memberService: MemberService, private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.getMembers();
  }

  getMembers() {
    this.memberService.getMembers().subscribe({
      next: (member) => {
        this.members = member;
        console.log(member);

        this.dataSource = new MatTableDataSource(this.members);
        this.dataSource.paginator = this.paginator;
      },
      error: (response) => {
        console.log(response);
      },
      complete: () => {
        console.log("Successfully get products");
      }
    });
  }

  filterMembers(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  onEdit(member: Member): void {
    this.showModal = true;
    this.selectedMember = { ...member };
  }

  onUpdateMember(): void {
    this.getMembers();
  }

  onDelete(member: Member): void {
    if (confirm(`Confirm Delete member ${member.FirstName}?`)) {
      const deletedMember = { ...member };
      this.memberService.deleteMember(member.MemberId).subscribe({
        next: () => {},
        error: (response) => {
          console.log("Error:", response);
        },
        complete: () => {
          console.log("Successfully deleted");
          this.getMembers();
          // Show snackbar message
          this.snackBar.open(`Member "${deletedMember.FirstName}" deleted.`, 'Undo', {
            duration: 3000,
          }).onAction().subscribe(() => {
            // Handle undo action
            console.log('Undo delete:', deletedMember);
            this.memberService.addMember(deletedMember).subscribe({
              next: () => {
                console.log('Successfully undo delete');
                console.log(deletedMember);
                this.getMembers();
              },
              error: (response) => {
                console.log('Error:', response);
              }
            });
          });
        }
      });
    }
  }
}
