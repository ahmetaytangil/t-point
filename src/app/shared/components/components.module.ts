import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipesModule } from "../pipes/pipes.module";
import { MaterialModule } from "../material/material.module";
import { SwiperModule } from "swiper/angular";
import { AtomButtonComponent } from './atom-button/atom-button.component';
import { AtomLineCardComponent } from './atom-line-card/atom-line-card.component';


@NgModule({
  declarations: [

    AtomButtonComponent,
     AtomLineCardComponent
  ],
  exports: [
    AtomButtonComponent,
    AtomLineCardComponent
  ],
  imports: [
    CommonModule,
    PipesModule,
    MaterialModule,
    SwiperModule
  ]
})
export class ComponentsModule {}
