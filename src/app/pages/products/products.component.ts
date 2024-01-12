import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products/products.service';
import { CartService } from 'src/app/services/cart/cart.service';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  products: any[] = [];
  private cartItems: any[] = [];

  constructor(
    private productService: ProductsService,
    private cartService: CartService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.productService.getProducts().subscribe((data) => {
      this.products = data.map((product) => ({
        ...product,
      }));
    });
  }

  getCartItems(): any[] {
    return this.cartItems;
  }

  addToCart(product: any): void {
    let arr = this.cartService.getCartItems();
    if (!arr.includes(product)) {
      this.cartService.addToCart(product);
      console.log(this.cartService.cartItems);
      product.addedToCart = true;
    }
    let newArr = JSON.stringify(arr);
    localStorage.setItem('cart', newArr);
  }
}
