import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Hero } from './hero';
@Injectable()
export class HerosService {
  private heroesUrl = 'api/heroes';
  constructor(private http: HttpClient) {

  }
  get(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl);
  }
  add(newHeros): Observable<Hero> {
    return this.http.post<Hero>(this.heroesUrl, newHeros);
  }

  search(term: string): Observable<Hero[]> {
    term = term.trim();
    const options = term ? { params: new HttpParams().set('name', term) } : {};
    return this.http.get<Hero[]>(this.heroesUrl, options);
  }

  updateHero (hero: Hero): Observable<Hero> {
    // httpOptions.headers =
    //   httpOptions.headers.set('Authorization', 'my-new-auth-token');

    return this.http.put<Hero>(this.heroesUrl, hero)
      // .pipe(
      //   catchError(this.handleError('updateHero', hero))
      // );
  }
}
