import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/observable';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-off-line',
  templateUrl: './off-line.component.html',
  styleUrls: ['./off-line.component.css']
})
export class OffLineComponent implements OnInit {
  posts$: Observable<any>;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.posts$ = this.http.get(
      'http://slowwly.robertomurray.co.uk/delay/5000/url/https://jsonplaceholder.typicode.com/posts'
    );
  }

}
