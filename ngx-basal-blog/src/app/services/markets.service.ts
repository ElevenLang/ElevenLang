import { HttpClient } from '@angular/common/http';
// import {Market} from './market';
import {Injectable} from '@angular/core';
// import {HttpClientService} from '../../../../shared/services/http-client.service';

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
