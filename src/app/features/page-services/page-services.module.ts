import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { PageServicesRoutingModule } from './page-services-routing.module';
import { PageServicesComponent } from './page-services.component';
import { ServiceComponent } from './service/service.component';
import { ServiceDetailComponent } from './service-detail/service-detail.component';

@NgModule({
  declarations: [
    PageServicesComponent,
    ServiceComponent,
    ServiceDetailComponent,
  ],
  imports: [CommonModule, PageServicesRoutingModule, SharedModule],
})
export class PageServicesModule {}
