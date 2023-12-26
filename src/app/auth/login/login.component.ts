import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(private auth: AuthService) {}
  user = this.auth.user;

  get userErr(): boolean {
    return this.auth.userErr;
  }

  login(f: any) {
    this.auth.login(f);
  }
}
