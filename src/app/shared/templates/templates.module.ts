import {
  NgModule
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from "@angular/platform-browser";
import { RouterLink, RouterLinkActive } from "@angular/router";
import { ComponentsModule } from "../components/components.module";
import { PipesModule } from "../pipes/pipes.module";
@NgModule({
  declarations: [
  ],
  exports: [
  ],
  imports: [
    CommonModule,
    PipesModule,
    BrowserModule,
    ComponentsModule,
    RouterLink,
    RouterLinkActive,
  ]
})
export class TemplatesModule {

}
