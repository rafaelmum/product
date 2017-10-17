import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { ShoppingCartComponent } from './shopping-cart.component';
import { ShoppingCartService } from './shopping-cart.service';

import { ShoppingCartPipe } from './shopping-cart.pipe';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ ShoppingCartComponent, ShoppingCartPipe ],
  exports: [ ShoppingCartComponent, ShoppingCartPipe ],
  providers: [ ShoppingCartService ]
})
export class ShoppingCartModule { }