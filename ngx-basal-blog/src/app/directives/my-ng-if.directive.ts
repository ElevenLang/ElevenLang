// import { Directive } from '@angular/core';

// @Directive({
//   selector: '[appMyNgIf]'
// })
// export class MyNgIfDirective {

//   constructor() { }

// }


import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({ selector: '[myNgIf]'})
export class MyNgIfDirective {

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef) { }

  @Input() set myNgIf(condition: boolean) {
    if (condition) {
      console.log(this.viewContainer, this.templateRef);
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }
}