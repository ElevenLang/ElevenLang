import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-multi-form',
  templateUrl: './multi-form.component.html',
  styleUrls: ['./multi-form.component.css']
})
export class MultiFormComponent implements OnInit {
  control = new FormControl({value: 'nice', disabled: true},  Validators.required,);

  constructor() { }

  ngOnInit() {
  }

}
