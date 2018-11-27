import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { APP_ROUTES } from './app.routes';
import { OperateComponent } from './operate/operate.component';
import { SubjectComponent } from './subject/subject.component';
@NgModule({
  declarations: [
    AppComponent,
    OperateComponent,
    SubjectComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
