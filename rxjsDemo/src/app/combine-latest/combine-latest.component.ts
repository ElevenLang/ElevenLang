import { Component, OnInit } from '@angular/core';
// RxJS v6+
import { fromEvent, combineLatest } from 'rxjs';
import { mapTo, startWith, scan, tap, map } from 'rxjs/operators';

@Component({
  selector: 'app-combine-latest',
  templateUrl: './combine-latest.component.html',
  styleUrls: ['./combine-latest.component.css']
})
export class CombineLatestComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const setHtml = id => val => document.getElementById(id).innerHTML = val;
    const addOneClick$ = id =>
      fromEvent(document.getElementById(id), 'click').pipe(
        mapTo(1),
        startWith(0),
        scan((acc, curr)=> acc + curr),
        tap(setHtml(`${id}Total`))
      )
    // addOneClick$('red').subscribe(v => console.log(v));
    // addOneClick$('black').subscribe(v => console.log(v));
    combineLatest(addOneClick$('red'), addOneClick$('black'))
    .pipe(map(([val1, val2]) => val1 + val2))
    .subscribe(setHtml('total'))

  }

}
