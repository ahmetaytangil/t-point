import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ROUTE_PATHS } from '../../../core/constants';
import {
  InvoiceWelcome,
  PageServiceService,
} from '../../../features/page-services/page-service.service';
import { AtomAlertModalsComponent } from '../../components/atom-alert-modals/atom-alert-modals.component';
import { PublicService } from '../../logic/public.service';

@Component({
  selector: 'app-temp-superonline-bill-payment',
  templateUrl: './temp-superonline-bill-payment.component.html',
  styleUrls: ['./temp-superonline-bill-payment.component.scss'],
})
export class TempSuperonlineBillPaymentComponent {
  subscriptionForm = this.fb.group({
    subscription_number: ['', [Validators.required, Validators.minLength(8)]],
  });

  constructor(
    private http: HttpClient,
    private fb: FormBuilder,
    private dialog: MatDialog,
    private router: Router,
    private pageService: PageServiceService,
    private publicService: PublicService,
  ) {}

  handleSubscription() {
    if (this.currentForm.valid) {
      this.publicService.generalLoading = true;
      this.http
        .post<InvoiceWelcome>('/superonline', this.currentForm.value)
        .subscribe({
          next: (res) => {
            this.pageService.invoicesData = res;
            this.publicService.generalLoading = false;
          },
          error: (error) => this.handleError(error),
        });
    } else {
      this.currentForm.markAllAsTouched();
    }
  }

  handleError(error: any) {
    this.publicService.generalLoading = false;
    this.dialog.open(AtomAlertModalsComponent, {
      data: {
        type: 'blue',
        name: 'UYARI',
        desc: error,
      },
    });
  }

  handlePrev() {
    this.router.navigate(
      this.pageService.currentServiceName
        ? [
            ROUTE_PATHS.services + '/public',
            this.pageService.currentServiceName,
          ]
        : ['..'],
    );
  }

  get currentForm() {
    return this.subscriptionForm;
  }

  addToForm(val: number, name: string) {
    const control = this.currentForm.get(name);
    if (control) control.setValue(control?.value + String(val));
  }

  deleteAll(name: string) {
    const control = this.currentForm.get(name);
    if (control) control.setValue('');
  }

  deleteLastNumber(name: string) {
    const control = this.currentForm.get(name);
    if (control) control.setValue(String(control?.value).slice(0, -1));
  }
}
