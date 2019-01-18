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
import { AnimateComponent } from './components/animate/animate.component';
import { AlertComponent } from './components/animate/alert/alert.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { InternationalPhoneModule } from 'ng4-intl-phone';
import { SharedModule } from './shared/shared.module';
import { MaterialComponent } from './components/material/material.component';
import {MatIconModule} from '@angular/material/icon';
import { MaterialBackComponent } from './components/material-back/material-back.component';

@NgModule({
  declarations: [
    AppComponent,
    OffLineComponent,
    InMemoryWebApiComponent,
    MarketsComponent,
    PackageSearchComponent,
    ViewChildrenComponent,
    PaneComponent,
    AnimateComponent,
    AlertComponent,
    MaterialComponent,
    MaterialBackComponent
  ],
  entryComponents: [AlertComponent],
  imports: [
    BrowserModule,
    InternationalPhoneModule,
    FormsModule,
    HttpClientModule,
    environment.production ?
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false },
    ) : [],
    BrowserAnimationsModule,
    SharedModule,
    MatIconModule
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
