import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pane',
  templateUrl: './pane.component.html',
  styleUrls: ['./pane.component.css']
})
export class PaneComponent implements OnInit {
  @Input()id: string;
  constructor() { }

  ngOnInit() {
  }

}
