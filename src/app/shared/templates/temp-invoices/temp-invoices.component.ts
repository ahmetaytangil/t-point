import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ROUTE_PATHS } from '../../../core/constants';
import {
  Invoice,
  PageServiceService,
} from '../../../features/page-services/page-service.service';
import { format } from 'date-fns';
import { tr } from 'date-fns/locale';
import { AtomAlertModalsComponent } from '../../components/atom-alert-modals/atom-alert-modals.component';

@Component({
  selector: 'app-temp-invoices',
  templateUrl: './temp-invoices.component.html',
  styleUrls: ['./temp-invoices.component.scss'],
})
export class TempInvoicesComponent {
  constructor(
    public pageService: PageServiceService,
    private router: Router,
    private dialog: MatDialog,
  ) {}

  handlePrev() {
    this.pageService.invoicesData = undefined;
    this.router.navigate(
      this.pageService.currentServiceName
        ? [
            ROUTE_PATHS.services + '/public',
            this.pageService.currentServiceName,
          ]
        : ['..'],
    );
  }

  formatDates(formatL: string, value: string) {
    return format(new Date(value), formatL, {
      locale: tr,
    });
  }

  handlePayInvoice(invoice: Invoice) {
    this.pageService
      .invoicePay({
        transaction_id: invoice.hash,
        amount: invoice.amount,
        order_id: invoice.order_id,
      })
      .subscribe({
        next: (res) => {
          this.pageService.currentInvoiceStatus = res;
        },
        error: (error) => this.handleError(error),
      });
  }

  handlePaySuperOnline(invoice: Invoice) {
    this.pageService
      .superOnlinePay({
        transaction_id: invoice.hash,
        amount: invoice.amount,
        order_id: invoice.order_id,
      })
      .subscribe({
        next: (res) => {
          this.pageService.currentInvoiceStatus = res;
        },
        error: (error) => this.handleError(error),
      });
  }

  handleError(error: any) {
    this.dialog.open(AtomAlertModalsComponent, {
      data: {
        type: 'blue',
        name: 'UYARI',
        desc: error,
      },
    });
  }
}
