import { Component, OnInit } from '@angular/core';
import { StocksService } from '../stocks.service';
@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManageComponent {
symbols: Array<string>;
  stock: string;
constructor(private service: StocksService) {
this.symbols = service.get();
}
add() {
this.symbols = this.service.add(this.stock.toUpperCase());
this.stock = '';
}
remove(symbol) {
this.symbols = this.service.remove(symbol);
}
}