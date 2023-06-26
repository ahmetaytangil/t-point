import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ROUTE_PATHS } from "./core/constants";
import { PageSplashComponent } from "./features/page-splash/page-splash.component";

const routes: Routes = [
  {
    path: ROUTE_PATHS.home,
    component: PageSplashComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: "enabled" })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
