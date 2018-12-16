import { HttpClient } from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
@Injectable()
export class MarketService {

  private url = 'api/v2/markets';

  constructor(private http: HttpClient) {
  }

  list(): Promise<any> {
    return this.http.get(this.url)
    //   .map((item: any) => item.map(data => new Market(data)))
      .toPromise();
  }

  country(){
    return this.http.get('../../assets/countryJson.json')
    // .pipe(
    //   map((item:any) => item.json())
    // )
    .toPromise();
  }
//   get(id: string): Promise<Market> {
//     return this.list()
//       .then(markets => markets.filter(market => market.id === id)[0]);
//   }

}
