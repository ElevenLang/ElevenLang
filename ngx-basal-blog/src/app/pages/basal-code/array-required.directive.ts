import { ValidatorFn, AbstractControl } from '@angular/forms';
export function arrayRequiredValidator(): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} | null => {
      // console.log(control.value);
      if(!control.value[1]){
        return {'arrRequired': ''}
      }else {
        return null;
      }
    };
  }