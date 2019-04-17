import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from './highlight.directive';
import {
  MatButtonModule,
  MatDialogModule,
  MatFormFieldModule,
  MatInputModule,
  MatRadioModule,
  MatSelectModule,
  MatTableModule,
  MatSortModule,
  MatButtonToggleModule,
  MatRippleModule,
  MatSidenavModule,
  MatCheckboxModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatRadioModule,
    MatSelectModule,
    MatSortModule,
    MatTableModule,
    MatButtonToggleModule,
    MatRippleModule,
    MatSidenavModule,
    MatCheckboxModule
  ],
  declarations: [HighlightDirective],
  exports: [
    MatButtonModule,
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatRadioModule,
    MatSelectModule,
    MatSortModule,
    MatTableModule,
    MatButtonToggleModule,
    MatRippleModule,
    MatSidenavModule,
    MatCheckboxModule,
    HighlightDirective
  ]
})
export class SharedModule { }
