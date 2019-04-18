import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @Input('appHighlight') highlightColor: string;
  constructor(
    private el: ElementRef
  ) { 
  }

  @HostListener('mouseenter') onmouseenter(){
    this.highlight();
  }

  @HostListener('mouseleave') onmouseleave(){
    this.highlight();
  }

  private highlight(){
    this.el.nativeElement.style.backgroundColor = this.highlightColor || 'red';
  }

}
