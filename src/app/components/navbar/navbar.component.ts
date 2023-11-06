import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  constructor(private auth: AuthService) {}
  user = this.auth.returnUser();

  menuToggle: boolean = false;
  imageSrc: any = {
    menuOpen: '../../../assets/images/icons/burger-icon.svg',
    menuClose: '../../../assets/images/icons/close-icon.svg',
  };

  windowWidth: number = window.innerWidth;

  logout() {
    this.auth.logout();
  }

  onMenuToggle() {
    this.menuToggle == false
      ? (this.menuToggle = true)
      : (this.menuToggle = false);
  }
}
