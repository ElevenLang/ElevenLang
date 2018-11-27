import { Component } from '@angular/core';
import * as Rx from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor() {
    // const simpleObservable = new Rx.Observable((observer) => {
    //   observer.next(Math.random());
    //   observer.complete();
    // })
    // const subject = new Rx.Subject();
    // simpleObservable.subscribe(v => console.log(v));
    // simpleObservable.subscribe(v => console.log(v));
    // simpleObservable.unsubscribe();

    // subject
    // subject.subscribe(v => console.log(v));
    // subject.subscribe(v => console.log(v));
    // subject.next(Math.random());
    // 不会执行下一句，BehaviorSubject会执行，参考BehaviorSubject,
    // subject.subscribe(v => console.log('now subject b is: ' + v));


    // const observable = Rx.Observable.create((observer) => {
    //   observer.next(Math.random());
    // });

    // const subject = new Rx.Subject();

    // // subscriber 1
    // subject.subscribe((data) => {
    //   console.log(data); // 0.24957144215097515 (random number)
    // });

    // // subscriber 2
    // subject.subscribe((data) => {
    //   console.log(data); // 0.24957144215097515 (random number)
    // });

    // observable.subscribe(subject);



    // const simpleObservable = new Rx.Observable((observer) => {
    //   observer.next(Math.random());
    //   observer.complete();
    // })
    // const subject = new Rx.Subject();
    // simpleObservable.subscribe(v => console.log(v));
    // simpleObservable.subscribe(v => console.log(v));
    // simpleObservable.unsubscribe();
    // subject
    // subject.subscribe(v => console.log(v));
    // subject.subscribe(v => console.log(v));
    // subject.next(Math.random());
    // const observable = Rx.Observable.create((observer) => {
    //   observer.next(Math.random());
    // });
    // const subject = new Rx.Subject();
    // // subscriber 1
    // subject.subscribe((data) => {
    //   console.log(data); // 0.24957144215097515 (random number)
    // });
    // // subscriber 2
    // subject.subscribe((data) => {
    //   console.log(data); // 0.24957144215097515 (random number)
    // });
    // observable.subscribe(subject);

    // BehaviorSubject
    // const subject = new Rx.BehaviorSubject(22);
    // subject.subscribe(v => console.log('Subscriber A:', v));

    // subject.next(Math.random());
    // subject.next(Math.random());

    // subject.subscribe(v => console.log('Subscriber B:', v));

    // subject.next(Math.random());
    // console.log(subject.value);

    // you can create BehaviorSubjects with a start value.
    // const replaySubject = new Rx.BehaviorSubject(Math.random());
    // replaySubject.subscribe(v => console.log(v))

    // buffer
    const myInterval = Rx.interval(1000);
    const bufferBy = Rx.fromEvent(document, 'click');
    // const myBufferedInterval = myInterval.buffer(bufferBy);


  }
}
