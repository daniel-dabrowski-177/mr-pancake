import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  cartItems: any[];

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    let arr = localStorage.getItem('cart');
    this.cartItems = JSON.parse(arr);
    console.log(this.cartItems);
  }

  increment(cartItem: any): void {
    cartItem.quantity = (cartItem.quantity || 1) + 1;
    this.updateLocalStorage();
  }

  decrement(cartItem: any): void {
    if (cartItem.quantity > 1) {
      cartItem.quantity -= 1;
      this.updateLocalStorage();
    }
  }

  private updateLocalStorage(): void {
    localStorage.setItem('cart', JSON.stringify(this.cartItems));
  }
}
