import { Component } from '@angular/core';
import { Product } from './product';
import { PRODUCTS } from './mock-products';
import { Router } from '@angular/router';

@Component({
  selector: 'my-products',
  templateUrl: './products.component.html',
  styleUrls: [ './products.component.css' ],
})
export class ProductsComponent  {
  selectedProduct: Product;
  products = PRODUCTS;
  showCart: boolean = false;
  showProductForm: boolean = false;

  constructor(
    private router: Router) { }

  onSelect(product: Product): void {
    this.selectedProduct = product;
  }

  showCartButton() {
    this.showCart = !this.showCart;
  }

  showProductFormButton() {
    this.showProductForm = !this.showProductForm;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedProduct.id]);
  }
}
