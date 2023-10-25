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
    // console.log(f.value.email);
    // console.log(f.value.password);
    // console.log(this.auth.email);
  }

  sendDataToService(data: any, f: any) {
    this.auth.sendData(data, f);
  }

  getUser() {
    if (!this.auth.returnUser()) {
      console.log('no user');
    } else console.log(this.auth.returnUser().stringify());
  }
}
