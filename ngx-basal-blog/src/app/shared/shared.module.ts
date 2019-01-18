import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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
  MatSidenavModule
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
    MatSidenavModule
  ],
  declarations: [],
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
    MatSidenavModule
  ]
})
export class SharedModule { }
