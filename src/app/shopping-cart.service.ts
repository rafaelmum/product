import { Component } from '@angular/core';
import { ShoppingCartItem } from './shopping-cart-item';
import { Product } from './product';


var ITEMS: ShoppingCartItem[] = new Array<ShoppingCartItem>();

export class ShoppingCartService  {
    addItem(product: Product) {
        let shoppingCartItem = ITEMS.find(item => item.product.id == product.id);

        if (shoppingCartItem) {
            ++shoppingCartItem.quantity;
        } else {
            shoppingCartItem = new ShoppingCartItem();
            shoppingCartItem.product = product;
            shoppingCartItem.quantity = 1;

            ITEMS.push(shoppingCartItem);
        }
    }

    getItems() {
        return ITEMS;
    }
}