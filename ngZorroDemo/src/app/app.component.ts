import { Component } from '@angular/core';
import { MarketService } from './service/markets.service';
import { en_US, NzI18nService } from 'ng-zorro-antd';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  selectedOS;
  selectedValue = 'lucy';
  constructor(private marketService: MarketService,
    private nzI18nService:NzI18nService){
    // this.marketService.list().then(console.log);
  }

  switchLanguage(item) {
    this.nzI18nService.setLocale(item);
    localStorage.setItem('lang', item);
  }
}
