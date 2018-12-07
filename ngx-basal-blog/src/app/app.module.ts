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

@NgModule({
  declarations: [
    AppComponent,
    OffLineComponent,
    InMemoryWebApiComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false },
    ),
    // HttpClientInMemoryWebApiModule.forRoot(
    //   InMemoryTestService, { dataEncapsulation: false },
    // )
  ],
  providers: [
    httpInterceptorProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
