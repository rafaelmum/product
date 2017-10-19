import { Injectable } from '@angular/core';

import { Product } from './product';
import { PRODUCTS } from './mock-products';

@Injectable()
export class ProductService {

    // USING SYNCHRONOUSLY/WITH OBSERVABLE.
    getProducts(): Product[] {
        return PRODUCTS;
    }
    
    // USING PROMISE.
    //getProducts(): Promise<Product[]> {
        //return Promise.resolve(PRODUCTS);
    //}

    addProduct(product: Product): void {
        PRODUCTS.push(product);
    }
}