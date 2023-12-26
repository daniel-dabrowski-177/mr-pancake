import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user: any = localStorage.getItem('user');

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
        console.error('Login error:', error);
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

    this.angularFireAuth
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
