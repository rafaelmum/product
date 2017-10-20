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
var forms_2 = require("@angular/forms");
var shopping_cart_module_1 = require("./shopping-cart.module");
var app_component_1 = require("./app.component");
var products_component_1 = require("./products.component");
var product_detail_component_1 = require("./product-detail.component");
var product_form_component_1 = require("./product-form.component");
var product_service_1 = require("./product.service");
var dashboard_component_1 = require("./dashboard.component");
var app_routing_module_1 = require("./app-routing.module");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, shopping_cart_module_1.ShoppingCartModule, forms_2.ReactiveFormsModule, app_routing_module_1.AppRoutingModule],
        declarations: [app_component_1.AppComponent, products_component_1.ProductsComponent, product_detail_component_1.ProductDetailComponent, product_form_component_1.ProductFormComponent, dashboard_component_1.DashboardComponent],
        providers: [product_service_1.ProductService],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map