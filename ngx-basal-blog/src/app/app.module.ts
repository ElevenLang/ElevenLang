import { MarketService } from './services/markets.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { OffLineComponent } from './off-line/off-line.component';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { InMemoryWebApiComponent } from './in-memory-web-api/in-memory-web-api.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { InMemoryTestService } from './in-memory-test.service';
import {httpInterceptorProviders} from './http-interceptors/index';

import {HerosService} from './services/heros.service';
import { AuthService } from './services/auth.service';
import { MarketsComponent } from './markets/markets.component';
import { PackageSearchComponent } from './package-search/package-search.component';
import { HttpErrorHandler } from './services/http-error-handler.service';
@NgModule({
  declarations: [
    AppComponent,
    OffLineComponent,
    InMemoryWebApiComponent,
    MarketsComponent,
    PackageSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    // HttpClientInMemoryWebApiModule.forRoot(
    //   InMemoryDataService, { dataEncapsulation: false },
    // )
  ],
  providers: [
    httpInterceptorProviders,
    HerosService,
    AuthService,
    MarketService,
    HttpErrorHandler
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
