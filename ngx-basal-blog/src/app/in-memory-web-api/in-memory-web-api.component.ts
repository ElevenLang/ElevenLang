import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

export interface Hero {
  id: number;
  name: string;
}

@Component({
  selector: 'app-in-memory-web-api',
  templateUrl: './in-memory-web-api.component.html',
  styleUrls: ['./in-memory-web-api.component.css']
})
export class InMemoryWebApiComponent implements OnInit {

  private heroes: Hero[];

  private heroesUrl = 'api/heroes';  // URL to web api

  constructor(private http: HttpClient) { };

  ngOnInit() {
    this.getHeroes().subscribe(
      data => this.heroes = data
    )
    this.getTestData();
  }

  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl)
  }


  getTestData():any{
    return this.http.get(this.heroesUrl).subscribe(v => console.log(v))
  }

}
