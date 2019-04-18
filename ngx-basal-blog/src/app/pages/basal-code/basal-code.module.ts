import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasalCodeRoutingModule } from './basal-code-routing.module';
import { ListComponent } from './list/list.component';
import { SharedModule } from '../../shared/shared.module';
import { TextareaExpandedFullComponent } from './textarea-expanded-full/textarea-expanded-full.component';
import { MultiFormComponent } from './multi-form/multi-form.component';

@NgModule({
  declarations: [
    ListComponent,
    TextareaExpandedFullComponent,
    MultiFormComponent
  ],
  imports: [
    CommonModule,
    BasalCodeRoutingModule,
    SharedModule
  ]
})
export class BasalCodeModule { }
