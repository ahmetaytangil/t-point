import {
  NgModule
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from "@angular/platform-browser";
import { RouterLink, RouterLinkActive } from "@angular/router";
import { ComponentsModule } from "../components/components.module";
import { PipesModule } from "../pipes/pipes.module";
import { TempFooterComponent } from './temp-footer/temp-footer.component';
import { TempBannerComponent } from './temp-banner/temp-banner.component';
import { TempHeaderComponent } from './temp-header/temp-header.component';
@NgModule({
  declarations: [

    TempFooterComponent,
     TempBannerComponent,
     TempHeaderComponent
  ],
  exports: [
    TempFooterComponent,
    TempBannerComponent,
    TempHeaderComponent
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
