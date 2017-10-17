"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var shopping_cart_component_1 = require("./shopping-cart.component");
var shopping_cart_service_1 = require("./shopping-cart.service");
var shopping_cart_pipe_1 = require("./shopping-cart.pipe");
var ShoppingCartModule = (function () {
    function ShoppingCartModule() {
    }
    return ShoppingCartModule;
}());
ShoppingCartModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, forms_1.FormsModule],
        declarations: [shopping_cart_component_1.ShoppingCartComponent, shopping_cart_pipe_1.ShoppingCartPipe],
        exports: [shopping_cart_component_1.ShoppingCartComponent, shopping_cart_pipe_1.ShoppingCartPipe],
        providers: [shopping_cart_service_1.ShoppingCartService]
    })
], ShoppingCartModule);
exports.ShoppingCartModule = ShoppingCartModule;
//# sourceMappingURL=shopping-cart.module.js.map