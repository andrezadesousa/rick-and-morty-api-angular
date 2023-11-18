import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent {
  constructor(private router: Router) {}

  emailAddress: string = 'Lara_Silva@yahoo.com';
  emailPassword: string = '6I0aVl6qG98rZ9Z';

  login() {
    // console.log(this.emailAddress);
    // console.log(this.emailPassword);

    this.router.navigate(['/listing']);
  }
}
