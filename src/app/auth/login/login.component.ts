import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(private auth: AuthService) {}
  data = 'Data from component';
  user = this.auth.user;

  login(f: any) {
    this.auth.login(f);
  }

  logUser() {
    console.log(this.auth.returnUser());
  }
}
