import { MarketService } from './services/markets.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { OffLineComponent } from './components/off-line/off-line.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

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
import { TableToggleComponent } from './components/table-toggle/table-toggle.component';
<<<<<<< HEAD
import { TextareaExpandedFullComponent } from './components/textarea-expanded-full/textarea-expanded-full.component';
import { MultiFormComponent } from './components/multi-form/multi-form.component';
import { MyNgIfDirective } from './directives/my-ng-if.directive';
=======
import { AppRoutingModule } from './app-routing.module';
// 引入你需要的图标，比如你需要 fill 主题的 AccountBook Alert 和 outline 主题的 Alert，推荐 ✔️
import { PlusCircleOutline, MinusCircleOutline } from '@ant-design/icons-angular/icons';
import { NZ_ICON_DEFAULT_TWOTONE_COLOR, NZ_ICONS } from 'ng-zorro-antd';
import { IconDefinition } from '@ant-design/icons-angular';

const icons: IconDefinition[] = [ PlusCircleOutline, MinusCircleOutline ];


>>>>>>> d8a0598e041935c71588a9b309d8d0fe2737ab21

@NgModule({
  imports: [
    BrowserModule,
    InternationalPhoneModule,
    // FormsModule,
    // ReactiveFormsModule,
    HttpClientModule,
    environment.production ?
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false },
    ) : [],
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule.forRoot(),
    MatIconModule,
    
  ],
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
    MaterialBackComponent,
    TableToggleComponent,
<<<<<<< HEAD
    TextareaExpandedFullComponent,
    MultiFormComponent,
    MyNgIfDirective
=======
>>>>>>> d8a0598e041935c71588a9b309d8d0fe2737ab21
  ],
  entryComponents: [AlertComponent],
  providers: [
    httpInterceptorProviders,
    HerosService,
    AuthService,
    MarketService,
    HttpErrorHandler,
    { provide: NZ_ICON_DEFAULT_TWOTONE_COLOR, useValue: '#00ff00' }, // 不提供的话，即为 Ant Design 的主题蓝色
    { provide: NZ_ICONS, useValue: icons }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
