import { Component, OnInit } from '@angular/core';
import { interval, fromEvent, merge, empty } from 'rxjs';
import { switchMap, scan, takeWhile, startWith, mapTo, tap } from 'rxjs/operators';

@Component({
  selector: 'app-empty',
  templateUrl: './empty.component.html',
  styleUrls: ['./empty.component.css']
})
export class EmptyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const countdownSeconds = 10;
    const setHtml = id => val => document.getElementById(id).innerHTML = val;
    const pauseButton = document.getElementById('pause');
    const resumeButton = document.getElementById('resume');
    const interval$ = interval(1000).pipe(mapTo(1));
    const pause$ = fromEvent(pauseButton, 'click').pipe(mapTo(false));
    const resume$ = fromEvent(resumeButton, 'click').pipe(mapTo(true));


    merge(pause$, resume$).pipe(
      startWith(true),
      // tap(val => console.log(val)),
      switchMap(val => {
        return val ? interval$ : empty();
      }),
      scan((acc, curr) => (curr ? curr + acc : acc)),
      takeWhile(val => val >= 0)
    )
      .subscribe(val => {
        // console.log(val);
        setHtml('remaining')(val);
      });
  }

}
