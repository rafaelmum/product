import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Product } from './product';
import { ShoppingCartService } from './shopping-cart.service';

import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

import { ProductService } from './product.service';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'product-detail',
  providers: [ShoppingCartService],
  templateUrl: './product-detail.component.html',
})
export class ProductDetailComponent implements OnInit {
    @Input() product: Product;

    constructor(private shoppingCartService: ShoppingCartService,
        private productService: ProductService,
        private route: ActivatedRoute,
        private location: Location) {}

    ngOnInit(): void {
        this.route.paramMap
            .switchMap((params: ParamMap) => this.productService.getProduct(+params.get('id')))
            .subscribe(product => this.product = product);
    }

    putOnCart() {
        this.shoppingCartService.addItem(this.product);
    }

    goBack(): void {
        this.location.back();
      }
}