import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './product';

@Pipe({
    name: 'shopping_cart_pipe'
})
export class ShoppingCartPipe implements PipeTransform {
    transform(product: Product, quantity?: number) {
        if (!quantity) {
            return product.price;
        }

        return product.price * quantity;
    }
}