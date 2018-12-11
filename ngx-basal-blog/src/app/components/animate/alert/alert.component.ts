import { Component, Input, EventEmitter, Output, ElementRef, OnInit } from '@angular/core';
import { trigger, style, animate, transition, state } from '@angular/animations';


// state222 可以理解为triggerName， 它是我们定义的动画名称，
// state定义动画的各种状态，
// transition定义各种状态变化之间的动画，
@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css'],
  animations: [
    trigger('state222', [
      state('void, hidden', style({ transform: 'scale(0)' })),
      state('visible', style({ transform: 'scale(1)' })),
      transition('* => visible', animate('150ms cubic-bezier(0.0, 0.0, 0.2, 1)')),
      transition('* => hidden', animate('150ms cubic-bezier(0.4, 0.0, 1, 1)')),
    ]),
    trigger('myFirstAnimate', [
      state('void, close', style({ display: 'none' })),
      state('open', style({ display: 'block', color: 'yellow' })),
      transition('close => open', animate('200ms')),
      transition('open => close', animate('100ms')),
      transition((fromState, toState) => {
        this.animateStateFlag = fromState === 'void' && toState === 'open';
        console.log(this.animateStateFlag);
        return fromState === 'off' && toState === 'on';
      },
        animate('1s 0s'))
    ])
  ]
})
export class AlertComponent implements OnInit {

  @Input() type: String = 'success';
  @Output() output = new EventEmitter();
  @Output() end = new EventEmitter();
  visibility = 'visible123';
  isDisabled = true;
  animateStateFlag: Boolean;

  animationDone(e) {
    console.log(e);
    if (e.toState === 'hidden') {
      this.end.emit(true);
    }
  }
  animationStart(e) {
    console.log(e);
  }

  constructor(private host: ElementRef) {
  }

  close() {
    this.visibility = 'hidden';
  }

  ngOnInit() {
  }

}
