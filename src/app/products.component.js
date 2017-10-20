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
var mock_products_1 = require("./mock-products");
var router_1 = require("@angular/router");
var ProductsComponent = (function () {
    function ProductsComponent(router) {
        this.router = router;
        this.products = mock_products_1.PRODUCTS;
        this.showCart = false;
        this.showProductForm = false;
    }
    ProductsComponent.prototype.onSelect = function (product) {
        this.selectedProduct = product;
    };
    ProductsComponent.prototype.showCartButton = function () {
        this.showCart = !this.showCart;
    };
    ProductsComponent.prototype.showProductFormButton = function () {
        this.showProductForm = !this.showProductForm;
    };
    ProductsComponent.prototype.gotoDetail = function () {
        this.router.navigate(['/detail', this.selectedProduct.id]);
    };
    return ProductsComponent;
}());
ProductsComponent = __decorate([
    core_1.Component({
        selector: 'my-products',
        templateUrl: './products.component.html',
        styleUrls: ['./products.component.css'],
    }),
    __metadata("design:paramtypes", [router_1.Router])
], ProductsComponent);
exports.ProductsComponent = ProductsComponent;
//# sourceMappingURL=products.component.js.map