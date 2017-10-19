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
var forms_1 = require("@angular/forms");
var product_validator_1 = require("./product-validator");
var product_service_1 = require("./product.service");
var product_1 = require("./product");
var ProductFormComponent = (function () {
    function ProductFormComponent(fb, productService) {
        this.fb = fb;
        this.productService = productService;
        this.productAddForm = fb.group({
            id: ['', forms_1.Validators.required, product_validator_1.ProductValidator.duplicated],
            name: ['', forms_1.Validators.required],
            price: ['', forms_1.Validators.required]
        });
    }
    Object.defineProperty(ProductFormComponent.prototype, "id", {
        get: function () {
            return this.productAddForm.get('id');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProductFormComponent.prototype, "name", {
        get: function () {
            return this.productAddForm.get('name');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProductFormComponent.prototype, "price", {
        get: function () {
            return this.productAddForm.get('price');
        },
        enumerable: true,
        configurable: true
    });
    ProductFormComponent.prototype.submit = function () {
        var product = new product_1.Product();
        product.id = this.id.value;
        product.name = this.name.value;
        product.price = this.price.value;
        this.productService.addProduct(product);
    };
    return ProductFormComponent;
}());
ProductFormComponent = __decorate([
    core_1.Component({
        selector: 'product-form',
        templateUrl: 'product-form.component.html',
        styles: [],
        providers: [product_service_1.ProductService]
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder, product_service_1.ProductService])
], ProductFormComponent);
exports.ProductFormComponent = ProductFormComponent;
//# sourceMappingURL=product-form.component.js.map