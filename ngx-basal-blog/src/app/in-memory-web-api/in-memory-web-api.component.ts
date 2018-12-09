import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HerosService } from '../services/heros.service';

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
  private testDataUrl = 'api/testData';  // URL to web api
  private markets: any;
  private editHero: Hero;

  constructor(private http: HttpClient,
    private herosService: HerosService,
    ) { }

  ngOnInit() {
    this.getHeroes().subscribe(
      data => this.heroes = data
    );
    this.getTestData();
    this.getDetails('btcusd');
    this.editHero = undefined;

  }

  getHeroes(): Observable<Hero[]> {
    return this.herosService.get();
  }
  addHeros(name): void {
    if (!name.trim()) {
      return;
    }
    const newHero: Hero = { name } as Hero;
    this.herosService.add(newHero).subscribe(res => {
      this.heroes.push(res);
    });
  }

  searchHeros(searchTerm: string) {
    if (searchTerm) {
      this.herosService.search(searchTerm).subscribe(res => {
        this.heroes = res;
      });
    }
  }

  edit(hero){
    this.editHero = hero;
  }

  update(){
    console.log(this.editHero);
    this.herosService.updateHero(this.editHero).subscribe(console.log);
    this.editHero = undefined;
  }

  getDetails(id): any {
    return this.http.get(this.testDataUrl + `/${id}`).subscribe(console.log);
  }
  getTestData(): any {
    return this.http.get(this.testDataUrl).subscribe(v => this.markets = v);
  }

}
