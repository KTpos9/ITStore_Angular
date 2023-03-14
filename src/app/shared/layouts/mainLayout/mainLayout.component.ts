import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './mainLayout.component.html',
  styleUrls: ['./mainLayout.component.scss']
})
export class MainLayoutComponent {
  constructor(public router: Router){}
}
