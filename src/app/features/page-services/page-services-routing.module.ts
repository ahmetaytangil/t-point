import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageServicesComponent } from './page-services.component';
import { ServiceDetailComponent } from './service-detail/service-detail.component';
import { ServiceComponent } from './service/service.component';

const routes: Routes = [
  {
    path: '',
    component: PageServicesComponent,
  },
  {
    path: 'public/:service_name',
    component: ServiceComponent,
  },
  {
    path: 'detail/:detail_name',
    component: ServiceDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageServicesRoutingModule {}
