import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from "@angular/material/core";
import { MatButtonModule } from "@angular/material/button";
import { GoogleMapsModule } from "@angular/google-maps";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatExpansionModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    GoogleMapsModule
  ],
  exports: [
    MatExpansionModule,
    MatDatepickerModule,
    MatButtonModule
  ]
})
export class MaterialModule {}
