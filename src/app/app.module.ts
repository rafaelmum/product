import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule }   from '@angular/router';
import { ShoppingCartModule } from './shopping-cart.module';

import { AppComponent }  from './app.component';
import { ProductsComponent }  from './products.component';
import { ProductDetailComponent } from './product-detail.component';
import { ProductFormComponent } from './product-form.component';

import { ProductService } from './product.service';
import { DashboardComponent } from './dashboard.component';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports: [ BrowserModule, FormsModule, ShoppingCartModule, ReactiveFormsModule, AppRoutingModule ],
  declarations: [ AppComponent, ProductsComponent, ProductDetailComponent, ProductFormComponent, DashboardComponent ],
  providers: [ ProductService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
