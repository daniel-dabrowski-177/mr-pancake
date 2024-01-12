import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  Table = {
    name: '',
    phone: '',
    email: '',
    date: '',
    time: '',
    guests: '',
    message: '',
    confirmed: false,
  };

  validationErrors = {
    name: false,
    phone: false,
    email: false,
    date: false,
    time: false,
    guests: false,
    confirmed: false,
  };

  bookTable() {
    this.validationErrors = {
      name: false,
      phone: false,
      email: false,
      date: false,
      time: false,
      guests: false,
      confirmed: false,
    };

    const fieldsToCheck = ['name', 'phone', 'email', 'date', 'time', 'guests'];

    fieldsToCheck.forEach((field) => {
      if (!this.Table[field]) {
        this.validationErrors[field] = true;
      }
    });

    if (
      !this.Table.confirmed ||
      Object.values(this.validationErrors).some((error) => error)
    ) {
      console.error('Formularz zawiera błędy. Proszę poprawić.');
      return;
    }

    console.log(this.Table);
  }
}
