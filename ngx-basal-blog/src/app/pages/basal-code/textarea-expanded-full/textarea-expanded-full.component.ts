import { Component, forwardRef, Renderer2, ViewChild } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

export const EPANDED_TEXTAREA_VALUE_ACCESSOR : any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => TextareaExpandedFullComponent),
  multi: true,
};
@Component({
  selector: 'app-textarea-expanded-full',
  templateUrl: './textarea-expanded-full.component.html',
  styleUrls: ['./textarea-expanded-full.component.css'],
  providers: [EPANDED_TEXTAREA_VALUE_ACCESSOR]
})
export class TextareaExpandedFullComponent implements ControlValueAccessor {
  @ViewChild('textarea') textarea;

  onChange;
  onTouched;

  writeValue( value : any ) : void {
    console.log(value);
    const div = this.textarea.nativeElement;
    this.renderer.setProperty(div, 'textContent', value);
  }

  registerOnChange( fn : any ) : void {
    console.log(fn);
    this.onChange = fn;
  }

  registerOnTouched( fn : any ) : void {
    console.log(fn);
    this.onTouched = fn;
  }

  setDisabledState( isDisabled : boolean ) : void {
    console.log(isDisabled);
    const div = this.textarea.nativeElement;
    const action = isDisabled ? 'addClass' : 'removeClass';
    this.renderer[action](div, 'disabled');
  }

  constructor( private renderer : Renderer2 ) {
  }

  change( $event ) {
    this.onChange($event.target.textContent);
    this.onTouched($event.target.textContent);
  }

}
