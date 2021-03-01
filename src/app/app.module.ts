import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { AppRoutes} from './app.routes';
import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { StocksService } from "./stocks.service";

import { HttpClientModule } from "@angular/common/http";
import { SummaryComponent } from './summary/summary.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ManageComponent } from './manager/manager.component';

@NgModule({
  imports: [BrowserModule, HttpClientModule,FormsModule,AppRoutes],
  declarations: [AppComponent, HelloComponent, SummaryComponent, DashboardComponent, ManageComponent],
  bootstrap: [AppComponent],
  providers: [StocksService]
})
export class AppModule {}
