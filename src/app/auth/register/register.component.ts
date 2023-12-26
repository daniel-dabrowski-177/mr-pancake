import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  constructor(private auth: AuthService) {}
  user = this.auth.user;

  get userErr(): boolean {
    return this.auth.userErr;
  }

  get userCred(): boolean {
    return this.auth.userCred;
  }

  register(f: any) {
    this.auth.register(f);
  }
}
