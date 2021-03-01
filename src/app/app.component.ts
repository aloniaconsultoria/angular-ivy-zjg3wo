import { HttpClient } from '@angular/common/http';
import { Component, VERSION } from '@angular/core';

import { StocksService, StockInterface } from './stocks.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
  stocks: Array<StockInterface>;
  
  constructor(service: StocksService){ 
    service.load(['AAPL']).subscribe(stocks => {
        this.stocks = stocks;
    });
  }
    
}

