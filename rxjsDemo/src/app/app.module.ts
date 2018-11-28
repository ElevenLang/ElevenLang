import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { APP_ROUTES } from './app.routes';
import { OperateComponent } from './operate/operate.component';
import { SubjectComponent } from './subject/subject.component';
import { CombineLatestComponent } from './combine-latest/combine-latest.component';
import { PipeComponent } from './pipe/pipe.component';
@NgModule({
  declarations: [
    AppComponent,
    OperateComponent,
    SubjectComponent,
    CombineLatestComponent,
    PipeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
