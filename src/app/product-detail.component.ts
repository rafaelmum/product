import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from './product';
import { ShoppingCartService } from './shopping-cart.service';

@Component({
  selector: 'product-detail',
  providers: [ShoppingCartService],
  template: `
    <div *ngIf="product">
        <h2>{{product.name}} details!</h2>
        <div><label>id: </label>{{product.id}}</div>
        <div>
        <label>name: </label>
        <input [(ngModel)]="product.name" placeholder="name">
        <button (click)="putOnCart()">Put on Cart</button>
        </div>
    </div>
    `
})
export class ProductDetailComponent {
    @Input() product: Product;

    constructor(private shoppingCartService: ShoppingCartService) {}

    putOnCart() {
        this.shoppingCartService.addItem(this.product);
    }
}