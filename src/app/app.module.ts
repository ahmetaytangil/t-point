import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutAppComponent } from './features/layout-landing/layout-app.component';
import { LayoutAuthComponent } from './features/layout-auth/layout-auth.component';
import { PageHomeComponent } from './features/layout-landing/page-home/page-home.component';
import { PageBlogComponent } from './features/layout-landing/page-blog/page-blog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from "./shared/shared.module";
import { TempExpansionPanelComponent } from "./shared/templates/temp-expansion-panel/temp-expansion-panel.component";
import { PageCampsComponent } from './features/layout-landing/page-camps/page-camps.component';
import { PageAboutUsComponent } from './features/layout-landing/page-about-us/page-about-us.component';
import { PageBlogDetailComponent } from './features/layout-landing/page-blog/page-blog-detail/page-blog-detail.component';
import { PageLoginComponent } from './features/layout-auth/page-login/page-login.component';
import { PageRegisterComponent } from './features/layout-auth/page-register/page-register.component';
import { LayoutAccountComponent } from './features/layout-account/layout-account.component';
import { PageAccountHomeComponent } from './features/layout-account/page-account-home/page-account-home.component';
import { PageAccountCampsComponent } from './features/layout-account/page-account-camps/page-account-camps.component';
import { PageAccountMykidComponent } from './features/layout-account/page-account-mykid/page-account-mykid.component';
import { PageAccountProfileComponent } from './features/layout-account/page-account-profile/page-account-profile.component';
import { SwiperModule } from "swiper/angular";
import { PageSplashComponent } from './features/page-splash/page-splash.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutAppComponent,
    LayoutAuthComponent,
    PageHomeComponent,
    PageBlogComponent,
    PageCampsComponent,
    PageAboutUsComponent,
    PageBlogDetailComponent,
    PageLoginComponent,
    PageRegisterComponent,
    LayoutAccountComponent,
    PageAccountHomeComponent,
    PageAccountCampsComponent,
    PageAccountMykidComponent,
    PageAccountProfileComponent,
    PageSplashComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SharedModule,
    TempExpansionPanelComponent,
    SwiperModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
