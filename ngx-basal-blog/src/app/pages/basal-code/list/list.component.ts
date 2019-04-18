import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  loading = false;
  data = [
    {
      title: 'Angular Custom Form Controls Made Easy',
      href: 'https://netbasal.com/angular-custom-form-controls-made-easy-4f963341c8e2'
    },
    {
      title: 'Angular Custom Form Controls Made Easy',
      href: 'https://netbasal.com/angular-custom-form-controls-made-easy-4f963341c8e2'
    },
    {
      title: 'Angular Custom Form Controls Made Easy',
      href: 'https://netbasal.com/angular-custom-form-controls-made-easy-4f963341c8e2'
    },
    {
      title: 'Angular Custom Form Controls Made Easy',
      href: 'https://netbasal.com/angular-custom-form-controls-made-easy-4f963341c8e2'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
