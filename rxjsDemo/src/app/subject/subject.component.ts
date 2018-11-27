import { Component, OnInit } from '@angular/core';
import * as Rx from 'rxjs';
@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {
  title = 'app';
  showTitle$ = new Rx.ReplaySubject<'title1' | 'title2'>();
  constructor() {
    this.showTitle$.next('title2');
   }

  ngOnInit() {
  }

}
