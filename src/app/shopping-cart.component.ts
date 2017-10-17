import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from './product';
import { ShoppingCartService } from './shopping-cart.service';
import { ShoppingCartItem } from './shopping-cart-item';
import { ShoppingCartPipe } from './shopping-cart.pipe';

@Component({
  selector: 'shopping-cart',
  providers: [ShoppingCartService],
  template: `
    <div *ngIf="shoppingCartItems.length > 0">
        <h2>Shopping Cart</h2>
        <table>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>PRICE</th>
            <th>QUANTITY</th>
            <th>TOTAL</th>
          </tr>
          <tr *ngFor="let shoppingCartItem of shoppingCartItems">
            <td>{{shoppingCartItem.product.id}}</td>
            <td>{{shoppingCartItem.product.name}}</td>
            <td>{{shoppingCartItem.product.price}}</td>
            <td>{{shoppingCartItem.quantity}}</td>
            <td>{{shoppingCartItem.product | shopping_cart_pipe:shoppingCartItem.quantity}}</td>
          </tr>
        </table>
    </div>
    `
})
export class ShoppingCartComponent {
    constructor(private shoppingCartService: ShoppingCartService) {}

    shoppingCartItems: ShoppingCartItem[] = this.shoppingCartService.getItems();
}