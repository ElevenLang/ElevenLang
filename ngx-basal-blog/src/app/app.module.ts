import { MarketService } from './services/markets.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { OffLineComponent } from './components/off-line/off-line.component';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { InMemoryWebApiComponent } from './components/in-memory-web-api/in-memory-web-api.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/in-memory-data.service';
import {httpInterceptorProviders} from './http-interceptors';

import {HerosService} from './services/heros.service';
import { AuthService } from './services/auth.service';
import { MarketsComponent } from './components/markets/markets.component';
import { PackageSearchComponent } from './components/package-search/package-search.component';
import { HttpErrorHandler } from './services/http-error-handler.service';
import { ViewChildrenComponent } from './components/view-children/view-children.component';
import { PaneComponent } from './components/view-children/pane/pane.component';
import { environment } from '../../environment/environment';
@NgModule({
  declarations: [
    AppComponent,
    OffLineComponent,
    InMemoryWebApiComponent,
    MarketsComponent,
    PackageSearchComponent,
    ViewChildrenComponent,
    PaneComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    environment.production ?
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false },
    ) : []
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
