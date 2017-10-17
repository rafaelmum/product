import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { ShoppingCartModule } from './shopping-cart.module';

import { AppComponent }  from './app.component';
import { ProductDetailComponent } from './product-detail.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, ShoppingCartModule ],
  declarations: [ AppComponent, ProductDetailComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
