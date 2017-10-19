import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { ShoppingCartModule } from './shopping-cart.module';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { ProductDetailComponent } from './product-detail.component';
import { ProductFormComponent } from './product-form.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, ShoppingCartModule, ReactiveFormsModule ],
  declarations: [ AppComponent, ProductDetailComponent, ProductFormComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
