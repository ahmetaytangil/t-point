import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipesModule } from "../pipes/pipes.module";
import { MaterialModule } from "../material/material.module";
import { SwiperModule } from "swiper/angular";


@NgModule({
  declarations: [
  ],
  exports: [
  ],
  imports: [
    CommonModule,
    PipesModule,
    MaterialModule,
    SwiperModule
  ]
})
export class ComponentsModule {}
