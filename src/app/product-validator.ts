import {AbstractControl, ValidationErrors} from '@angular/forms';

export class ProductValidator {
  static duplicated(control: AbstractControl): ValidationErrors | null {
    const q = new Promise<ValidationErrors>((resolve, reject) => {
      setTimeout(() => {
        if(control.value === 'P123') {
          resolve({'duplicated': true});
        } else {
          resolve(null);
        }
      }, 1000);
    });
    return q;
  }
}