import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products/products.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  pancakes: any[] = [];
  coffees: any[] = [];

  constructor(private productService: ProductsService) {}

  ngOnInit() {
    this.productService
      .getProducts()
      .subscribe((pancakesData) => (this.pancakes = pancakesData));

    this.productService
      .getCoffees()
      .subscribe((coffeesData) => (this.coffees = coffeesData));
  }
}
