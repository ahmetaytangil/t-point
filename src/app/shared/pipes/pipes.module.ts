import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GetSrcPipe } from "./get-src.pipe";



@NgModule({
  declarations: [
    GetSrcPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    GetSrcPipe
  ]
})
export class PipesModule { }
