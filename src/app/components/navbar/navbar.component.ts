import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  menuToggle: boolean = false;
  imageSrc: any = {
    menuOpen: '../../../assets/images/icons/burger-icon.svg',
    menuClose: '../../../assets/images/icons/close-icon.svg',
  };

  windowWidth: number = window.innerWidth;

  onMenuToggle() {
    this.menuToggle == false
      ? (this.menuToggle = true)
      : (this.menuToggle = false);

    // Testing navigation functionality
    console.log(this.windowWidth);
    console.log(this.menuToggle);
    console.log(this.imageSrc.menuOpen);
    console.log(this.imageSrc.menuClose);
  }
}
