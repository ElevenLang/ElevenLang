import { HttpClient } from '@angular/common/http';
import {Injectable} from '@angular/core';

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

//   get(id: string): Promise<Market> {
//     return this.list()
//       .then(markets => markets.filter(market => market.id === id)[0]);
//   }

}
