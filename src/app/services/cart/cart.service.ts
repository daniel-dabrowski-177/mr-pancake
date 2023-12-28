import { Injectable } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor(private authService: AuthService) {}

  cartItems: any[] = [];

  getCartItems(): any[] {
    return this.cartItems;
  }

  addToCart(item: any): void {
    this.cartItems.push(item);
  }
}
