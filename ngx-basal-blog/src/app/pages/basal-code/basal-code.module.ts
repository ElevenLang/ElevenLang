import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasalCodeRoutingModule } from './basal-code-routing.module';
import { ListComponent } from './list/list.component';
import { SharedModule } from '../../shared/shared.module';
import { TextareaExpandedFullComponent } from './textarea-expanded-full/textarea-expanded-full.component';
import { MultiFormComponent } from './multi-form/multi-form.component';
import { SelectInputComponent } from './select-input/select-input.component';

@NgModule({
  declarations: [
    ListComponent,
    TextareaExpandedFullComponent,
    MultiFormComponent,
    SelectInputComponent
  ],
  imports: [
    CommonModule,
    BasalCodeRoutingModule,
    SharedModule
  ]
})
export class BasalCodeModule { }
