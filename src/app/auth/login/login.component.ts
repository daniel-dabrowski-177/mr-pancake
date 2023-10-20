import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(private auth: AuthService) {
    console.log('testing service -> ' + this.auth.email);
  }

  click() {
    this.auth.login();
  }

  isUser() {
    console.log(this.auth.user);
  }
}
