import { Component, OnInit, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';


export const EPANDED_TEXTAREA_VALUE_ACCESSOR : any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => SelectInputComponent),
  multi: true,
};
@Component({
  selector: 'app-select-input',
  templateUrl: './select-input.component.html',
  styleUrls: ['./select-input.component.scss'],
  providers: [EPANDED_TEXTAREA_VALUE_ACCESSOR]
})
export class SelectInputComponent implements ControlValueAccessor {
  @Input() options;
  selectValue: number;
  inputValue: string;
  onChange;
  onTouched;

  writeValue(value: any): void {
    this.selectValue = +value[0];
    this.inputValue = value[1];
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
  }

  constructor() { }

  ngOnInit() {
  }

  change(value){
    this.onChange([this.selectValue, this.inputValue]);
    this.onTouched([this.selectValue, this.inputValue]);
  }

}
