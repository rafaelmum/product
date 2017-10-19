import {Component} from '@angular/core';
import {FormBuilder, Validators, FormGroup, FormControl} from '@angular/forms';
import {ProductValidator} from './product-validator';
import {ProductService} from './product.service';
import {Product} from './product';

@Component({
  selector: 'product-form',
  templateUrl: 'product-form.component.html',
  styles: [],
  providers: [ProductService]
})
export class ProductFormComponent {
  productAddForm: FormGroup;
  
  constructor(private fb: FormBuilder, private productService: ProductService) {
    this.productAddForm = fb.group({
      id: ['', Validators.required, ProductValidator.duplicated],
      name: ['', Validators.required],
      price: ['', Validators.required]
    });
  }

  get id() {
    return this.productAddForm.get('id');
  }

  get name() {
    return this.productAddForm.get('name');
  }

  get price() {
    return this.productAddForm.get('price');
  }

  submit() {
    let product = new Product();
    product.id = this.id.value;
    product.name = this.name.value;
    product.price = this.price.value;

    this.productService.addProduct(product);
  }
}