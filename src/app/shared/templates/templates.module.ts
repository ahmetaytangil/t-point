import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NgxMaskModule } from 'ngx-mask';
import { ComponentsModule } from '../components/components.module';
import { PipesModule } from '../pipes/pipes.module';
import { TempFooterComponent } from './temp-footer/temp-footer.component';
import { TempBannerComponent } from './temp-banner/temp-banner.component';
import { TempHeaderComponent } from './temp-header/temp-header.component';
import { TempTurkcellBillPaymentComponent } from './temp-turkcell-bill-payment/temp-turkcell-bill-payment.component';
import { TempInvoicesComponent } from './temp-invoices/temp-invoices.component';
import { TempStatusSocketComponent } from './temp-status-socket/temp-status-socket.component';
import { TempSuperonlineBillPaymentComponent } from './temp-superonline-bill-payment/temp-superonline-bill-payment.component';
import { TempBalanceInstallationComponent } from './temp-balance-installation/temp-balance-installation.component';
import { TempPackageInstallationComponent } from './temp-package-installation/temp-package-installation.component';
@NgModule({
  declarations: [
    TempFooterComponent,
    TempBannerComponent,
    TempHeaderComponent,
    TempTurkcellBillPaymentComponent,
    TempInvoicesComponent,
    TempStatusSocketComponent,
    TempSuperonlineBillPaymentComponent,
    TempBalanceInstallationComponent,
    TempPackageInstallationComponent,
  ],
  exports: [
    TempFooterComponent,
    TempBannerComponent,
    TempHeaderComponent,
    TempTurkcellBillPaymentComponent,
    TempInvoicesComponent,
    TempStatusSocketComponent,
    TempSuperonlineBillPaymentComponent,
    TempBalanceInstallationComponent,
    TempPackageInstallationComponent,
  ],
  imports: [
    CommonModule,
    PipesModule,
    ComponentsModule,
    RouterLink,
    RouterLinkActive,
    NgxMaskModule,
    ReactiveFormsModule,
  ],
})
export class TemplatesModule {}
