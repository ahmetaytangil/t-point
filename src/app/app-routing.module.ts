import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ROUTE_PATHS } from "./core/constants";
import { PageSplashComponent } from "./features/page-splash/page-splash.component";
import { LayoutAppComponent } from "./features/layout-app/layout-app.component";
import { PageExtraPackagesComponent } from "./features/page-extra-packages/page-extra-packages.component";
import { PagePackagesComponent } from "./features/page-packages/page-packages.component";
import { PageDetailComponent } from "./features/page-detail/page-detail.component";

const routes: Routes = [
  {
    path: ROUTE_PATHS.home,
    component: PageSplashComponent
  },
  {
    path: ROUTE_PATHS.extra_packages,
    component: LayoutAppComponent,
    children: [
      {
        path: '',
        component: PageExtraPackagesComponent
      },
      {
        path: ROUTE_PATHS.packages + '/:package_id',
        component: PagePackagesComponent
      },
      {
        path: ROUTE_PATHS.package_detail + '/:package_detail_id',
        component: PageDetailComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: "enabled" })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
