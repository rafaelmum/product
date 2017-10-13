import { Component } from '@angular/core';
import { Product } from './product';

const PRODUCTS: Product[] = [
  { id: 11, name: 'Sandals' },
  { id: 12, name: 'Ball' },
  { id: 13, name: 'Shirt' },
  { id: 14, name: 'Shoes' },
  { id: 15, name: 'Mouse' },
  { id: 16, name: 'Keyboard' },
  { id: 17, name: 'Laptop' },
  { id: 18, name: 'TV' },
  { id: 19, name: 'Car' },
  { id: 20, name: 'Coffee Machine' }
];

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <h2>My Products</h2>
    <ul class="products">
      <li *ngFor="let product of products" (click)="onSelect(product)" [class.selected]="product === selectedProduct">
        <span class="badge">{{product.id}}</span> {{product.name}}
      </li>
    </ul>
    <product-detail [product]="selectedProduct"></product-detail>
    `,
    styles: [`
    .selected {
      background-color: #CFD8DC !important;
      color: white;
    }
    .products {
      margin: 0 0 2em 0;
      list-style-type: none;
      padding: 0;
      width: 15em;
    }
    .products li {
      cursor: pointer;
      position: relative;
      left: 0;
      background-color: #EEE;
      margin: .5em;
      padding: .3em 0;
      height: 1.6em;
      border-radius: 4px;
    }
    .products li.selected:hover {
      background-color: #BBD8DC !important;
      color: white;
    }
    .products li:hover {
      color: #607D8B;
      background-color: #DDD;
      left: .1em;
    }
    .products .text {
      position: relative;
      top: -3px;
    }
    .products .badge {
      display: inline-block;
      font-size: small;
      color: white;
      padding: 0.8em 0.7em 0 0.7em;
      background-color: #607D8B;
      line-height: 1em;
      position: relative;
      left: -1px;
      top: -4px;
      height: 1.8em;
      margin-right: .8em;
      border-radius: 4px 0 0 4px;
    }
  `],
})
export class AppComponent  {
  title = 'Tour of Products';
  selectedProduct: Product;
  products = PRODUCTS;

  onSelect(product: Product): void {
    this.selectedProduct = product;
  }
}
