import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  products: any[] = [];
  cartArr: any[] = [];

  constructor(private productService: ProductsService) {}

  ngOnInit() {
    this.productService.getProducts().subscribe((data) => {
      this.products = data.map((product) => ({
        ...product,
        addedToCart: false,
      }));
    });
  }

  productAdd(product: any) {
    if (!product.addedToCart) {
      this.cartArr.push(product);
      product.addedToCart = true;
      console.log(this.cartArr);
    }
  }
}
