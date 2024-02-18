import { Component, OnInit } from '@angular/core';
import { OpinionsService } from 'src/app/services/opinions/opinions.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  // Book-a-table section
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

  // Opinions section
  name: string = '';
  message: string = '';
  opinionAdded: boolean = false;
  errorMessage: string = '';

  constructor(private opinionsService: OpinionsService) {}

  addOpinion(): void {
    if (this.name.trim() === '' || this.message.trim() === '') {
      this.errorMessage = 'Wypełnij wszystkie pola';
    } else {
      this.errorMessage = ''; // Wyczyść komunikat błędu, jeśli pola są wypełnione
      this.opinionsService
        .addOpinion(this.name, this.message)
        .then(() => {
          this.name = '';
          this.message = '';
          this.opinionAdded = true; // Ustawienie wartości na true po pomyślnym dodaniu opinii
          console.log('Opinia dodana pomyślnie');
        })
        .catch((error) =>
          console.error('Błąd podczas dodawania opinii:', error)
        );
    }
  }

  // Testimonials section
  latestOpinions: any[] = [];
  datePipe: DatePipe = new DatePipe('en-US');

  ngOnInit(): void {
    this.opinionsService.getOpinions().subscribe((opinions) => {
      this.latestOpinions = opinions.slice(0, 3); // Pobierz trzy najnowsze opinie
    });
  }

  formatTimestamp(timestamp: any): string {
    return this.datePipe.transform(timestamp.toDate(), 'dd.MM.yyyy') || '';
  }
}
