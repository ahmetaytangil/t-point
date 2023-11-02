import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule, isDevMode } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpInterceptorApp } from './shared/logic/app-interceptor';
import { SharedModule } from './shared/shared.module';
import { SwiperModule } from 'swiper/angular';
import { PageSplashComponent } from './features/page-splash/page-splash.component';
import { PageExtraPackagesComponent } from './features/page-extra-packages/page-extra-packages.component';
import { LayoutAppComponent } from './features/layout-app/layout-app.component';
import { PagePackagesComponent } from './features/page-packages/page-packages.component';
import { PageDetailComponent } from './features/page-detail/page-detail.component';
import { PagePhoneNumberComponent } from './features/page-phone-number/page-phone-number.component';
import { IConfig, NgxMaskModule } from 'ngx-mask';
import { PageBuyComponent } from './features/page-buy/page-buy.component';
import { PageLoginWithQrComponent } from './features/page-login-with-qr/page-login-with-qr.component';
import { PageAfterPaymentComponent } from './features/page-after-payment/page-after-payment.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { PageSerialNumberComponent } from './features/page-serial-number/page-serial-number.component';
import { PageLoginComponent } from './features/page-login/page-login.component';
import { PageWelcomeComponent } from './features/page-welcome/page-welcome.component';

const maskConfig: Partial<IConfig> = {
  validation: false,
};
@NgModule({
  declarations: [
    AppComponent,
    PageSplashComponent,
    PageExtraPackagesComponent,
    LayoutAppComponent,
    PagePackagesComponent,
    PageDetailComponent,
    PagePhoneNumberComponent,
    PageBuyComponent,
    PageLoginWithQrComponent,
    PageAfterPaymentComponent,
    PageSerialNumberComponent,
    PageLoginComponent,
    PageWelcomeComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SharedModule,
    SwiperModule,
    NgxMaskModule.forRoot(maskConfig),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      registrationStrategy: 'registerWhenStable:30000',
    }),
    ReactiveFormsModule,
    MatDialogModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorApp,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
