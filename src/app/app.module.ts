import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from "./shared/shared.module";
import { SwiperModule } from "swiper/angular";
import { PageSplashComponent } from './features/page-splash/page-splash.component';
import { PageExtraPackagesComponent } from './features/page-extra-packages/page-extra-packages.component';
import { LayoutAppComponent } from "./features/layout-app/layout-app.component";
import { PagePackagesComponent } from './features/page-packages/page-packages.component';
import { PageDetailComponent } from './features/page-detail/page-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    PageSplashComponent,
    PageExtraPackagesComponent,
    LayoutAppComponent,
    PagePackagesComponent,
    PageDetailComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SharedModule,
    SwiperModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
