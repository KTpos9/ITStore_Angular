import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Member } from 'src/app/models/Member.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent {
  registerFormGroup: FormGroup;
  constructor(private auth: AuthService, private router: Router) {
    this.initForm();
  }

  initForm() {
    this.registerFormGroup = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      confirmPassword: new FormControl('', [Validators.required])
    });
  }

  register() {
    if(this.registerFormGroup.get('password')?.value != this.registerFormGroup.get('confirmPassword')?.value){
      alert('Password Doesn\'t match');
      return;
    }
    let newMember: Member = {
      FirstName: this.registerFormGroup.get('firstName')?.value,
      LastName: this.registerFormGroup.get('lastName')?.value,
      Email: this.registerFormGroup.get('email')?.value,
      Password: this.registerFormGroup.get('password')?.value,
      Role: 'User',
      MemberId: 0
    }
    this.auth.register(newMember).subscribe({
      next: (member) => {
        console.log(member);
      },
      error: (response) => {
        console.log(response);
        alert('registration error, plese try again');
      },
      complete: () => {
        this.router.navigate(['/login']);
      }
    })
  }
}
