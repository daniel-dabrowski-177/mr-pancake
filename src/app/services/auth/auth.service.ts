import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user: any = localStorage.getItem('user');
  private _userErr: boolean = false;
  private _userCred: boolean = false;

  get userErr(): boolean {
    return this._userErr;
  }

  get userCred(): boolean {
    return this._userCred;
  }

  returnUser() {
    let user = JSON.parse(this.user);
    return user;
  }

  constructor(private angularFireAuth: AngularFireAuth) {}

  login(f: any) {
    let email: string = f.value.email;
    let password: string = f.value.password;
    let user: any;

    this.angularFireAuth
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        user = userCredential.user;
        user = JSON.stringify(user);
        localStorage.setItem('user', user);
        location.href = '/';
      })
      .catch((error) => {
        if (error.message.includes('auth/invalid-login-credentials')) {
          console.log('auth/invalid-login-credentials');
          this._userErr = true;
        } else {
          console.error('Unknown error:', error.message);
          this._userErr = false;
        }
      });
  }

  logout() {
    this.angularFireAuth
      .signOut()
      .then(() => {
        localStorage.removeItem('user');
        location.href = '/login';
      })
      .catch((error) => {
        console.error('Logout error:', error);
      });
  }

  register(f: any) {
    let email: string = f.value.email;
    let password: string = f.value.password;
    let confPassword: string = f.value.confPassword;

    this._userErr = false;
    this._userCred = false;

    if (password == confPassword) {
      this.angularFireAuth
        .createUserWithEmailAndPassword(email, password)
        .then(() => {
          location.href = '/login';
        })
        .catch((error) => {
          if (
            error.message.includes(
              'The email address is already in use by another account'
            )
          ) {
            console.log(
              'Błąd: Adres e-mail jest już używany przez inne konto.'
            );
            this._userErr = true;
          } else {
            console.error('Unknown error:', error.message);
            this._userErr = false;
          }
        });
    } else {
      console.log('Passwords are not the same!');
      this._userCred = true;
    }
  }
}
