import {
  Component, OnInit, NgModule, Input, ComponentFactory,
  ComponentRef, ComponentFactoryResolver, ViewContainerRef,
  ChangeDetectorRef, TemplateRef, ViewChild, Output, EventEmitter
} from '@angular/core';
import { AlertComponent } from './alert/alert.component';

@Component({
  selector: 'app-animate',
  templateUrl: './animate.component.html',
  styleUrls: ['./animate.component.css']
})

export class AnimateComponent implements OnInit {

  @ViewChild('alertContainer', { read: ViewContainerRef }) container;
  componentRef: ComponentRef<any>;

  constructor(private resolver: ComponentFactoryResolver) { }

  createComponent(type) {
    if (this.componentRef) {
      this.componentRef.instance.end.subscribe(() => {
        this.create(type);
      });
      this.componentRef.instance.close();
    } else {
      this.create(type);
    }

  }

  create(type) {
    this.ngOnDestroy();
    const factory: ComponentFactory<any> = this.resolver.resolveComponentFactory(AlertComponent);

    this.componentRef = this.container.createComponent(factory);
    console.log(factory, this.componentRef);
    this.componentRef.instance.type = type;
  }

  ngOnDestroy() {
    this.componentRef && this.componentRef.destroy();
  }

  ngOnInit() {
    console.log(this.container);
  }

}
