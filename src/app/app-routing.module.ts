import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ROUTE_PATHS } from './core/constants';
import { PageLoginComponent } from './features/page-login/page-login.component';
import { canActivateAuth } from './features/page-login/page-login.service';
import { PageSerialNumberComponent } from './features/page-serial-number/page-serial-number.component';
import { PageSplashComponent } from './features/page-splash/page-splash.component';
import { PageWelcomeComponent } from './features/page-welcome/page-welcome.component';
import { canActivateLocalStorage } from './shared/logic/public.service';

const routes: Routes = [
  {
    path: ROUTE_PATHS.splash,
    component: PageSplashComponent,
    canActivate: [canActivateLocalStorage],
  },
  {
    path: ROUTE_PATHS.serial_number,
    component: PageSerialNumberComponent,
    canActivate: [canActivateLocalStorage],
  },
  {
    path: ROUTE_PATHS.login,
    component: PageLoginComponent,
    canActivate: [canActivateLocalStorage],
  },
  {
    path: ROUTE_PATHS.welcome,
    component: PageWelcomeComponent,
    canActivate: [canActivateLocalStorage, canActivateAuth],
  },
  {
    path: ROUTE_PATHS.services,
    canActivate: [canActivateLocalStorage, canActivateAuth],
    loadChildren: () =>
      import('./features/page-services/page-services.module').then(
        (m) => m.PageServicesModule,
      ),
  },
  /*{
    path: ROUTE_PATHS.extra_packages,
    component: LayoutAppComponent,
    canActivate: [canActivateAuth],
    children: [
      {
        path: '',
        component: PageExtraPackagesComponent,
      },
      {
        path: ROUTE_PATHS.packages + '/:package_id',
        component: PagePackagesComponent,
      },
      {
        path: ROUTE_PATHS.package_detail + '/:package_detail_id',
        component: PageDetailComponent,
      },
      {
        path: ROUTE_PATHS.phone_number,
        component: PagePhoneNumberComponent,
      },
      {
        path: ROUTE_PATHS.buy,
        component: PageBuyComponent,
      },
      {
        path: ROUTE_PATHS.login_with_qr,
        component: PageLoginWithQrComponent,
      },
      {
        path: ROUTE_PATHS.after_payment,
        component: PageAfterPaymentComponent,
      },
    ],
  },*/
  { path: '**', redirectTo: ROUTE_PATHS.welcome },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
