import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { OffLineComponent } from './off-line/off-line.component';
import { HttpClientModule } from '@angular/common/http';
import { InMemoryWebApiComponent } from './in-memory-web-api/in-memory-web-api.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { InMemoryTestService } from './in-memory-test.service';

@NgModule({
  declarations: [
    AppComponent,
    OffLineComponent,
    InMemoryWebApiComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false },
    ),
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryTestService, { dataEncapsulation: false },
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
