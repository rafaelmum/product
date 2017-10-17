"use strict";
var shopping_cart_item_1 = require("./shopping-cart-item");
var ITEMS = new Array();
var ShoppingCartService = (function () {
    function ShoppingCartService() {
    }
    ShoppingCartService.prototype.addItem = function (product) {
        var shoppingCartItem = ITEMS.find(function (item) { return item.product.id == product.id; });
        if (shoppingCartItem) {
            ++shoppingCartItem.quantity;
        }
        else {
            shoppingCartItem = new shopping_cart_item_1.ShoppingCartItem();
            shoppingCartItem.product = product;
            shoppingCartItem.quantity = 1;
            ITEMS.push(shoppingCartItem);
        }
    };
    ShoppingCartService.prototype.getItems = function () {
        return ITEMS;
    };
    return ShoppingCartService;
}());
exports.ShoppingCartService = ShoppingCartService;
//# sourceMappingURL=shopping-cart.service.js.map