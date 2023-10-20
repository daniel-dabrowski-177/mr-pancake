import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  email: string = 'sample1@gmail.com';
  password: string = '123456';
  user: any;

  constructor(private angularFireAuth: AngularFireAuth) {}

  login() {
    this.angularFireAuth
      .signInWithEmailAndPassword(this.email, this.password)
      .then((userCredential) => {
        // User successfully logged in
        this.user = userCredential.user;
        console.log('Logged in user:', this.user?.email);
        console.log(userCredential);
      })
      .catch((error) => {
        // Handle login error
        console.error('Login error:', error);
      });
  }

  register() {
    this.angularFireAuth
      .createUserWithEmailAndPassword(this.email, this.password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
