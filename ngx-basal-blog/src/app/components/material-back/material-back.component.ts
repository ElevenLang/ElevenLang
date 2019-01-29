import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-material-back',
  templateUrl: './material-back.component.html',
  styleUrls: ['./material-back.component.css']
})
export class MaterialBackComponent implements OnInit {

  options: FormGroup;

  constructor(fb: FormBuilder) {
    this.options = fb.group({
      hideRequired: false,
      floatLabel: 'never',
    });
  }

  ngOnInit() {
  }

}
