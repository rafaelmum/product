"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var shopping_cart_service_1 = require("./shopping-cart.service");
var ShoppingCartComponent = (function () {
    function ShoppingCartComponent(shoppingCartService) {
        this.shoppingCartService = shoppingCartService;
        this.shoppingCartItems = this.shoppingCartService.getItems();
    }
    return ShoppingCartComponent;
}());
ShoppingCartComponent = __decorate([
    core_1.Component({
        selector: 'shopping-cart',
        providers: [shopping_cart_service_1.ShoppingCartService],
        template: "\n    <div *ngIf=\"shoppingCartItems.length > 0\">\n        <h2>Shopping Cart</h2>\n        <table>\n          <tr>\n            <th>ID</th>\n            <th>NAME</th>\n            <th>PRICE</th>\n            <th>QUANTITY</th>\n            <th>TOTAL</th>\n          </tr>\n          <tr *ngFor=\"let shoppingCartItem of shoppingCartItems\">\n            <td>{{shoppingCartItem.product.id}}</td>\n            <td>{{shoppingCartItem.product.name}}</td>\n            <td>{{shoppingCartItem.product.price}}</td>\n            <td>{{shoppingCartItem.quantity}}</td>\n            <td>{{shoppingCartItem.product | shopping_cart_pipe:shoppingCartItem.quantity}}</td>\n          </tr>\n        </table>\n    </div>\n    "
    }),
    __metadata("design:paramtypes", [shopping_cart_service_1.ShoppingCartService])
], ShoppingCartComponent);
exports.ShoppingCartComponent = ShoppingCartComponent;
//# sourceMappingURL=shopping-cart.component.js.map