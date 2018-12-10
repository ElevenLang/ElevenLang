import { Component, OnInit } from '@angular/core';
import { MarketService } from '../../services/markets.service';

@Component({
  selector: 'app-markets',
  templateUrl: './markets.component.html',
  styleUrls: ['./markets.component.css']
})
export class MarketsComponent implements OnInit {

  constructor(private marketService: MarketService) { }

  ngOnInit() {
    this.marketService.list();

  }

}
