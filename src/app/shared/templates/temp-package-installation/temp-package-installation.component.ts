import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ROUTE_PATHS } from '../../../core/constants';
import {
  InvoicePayStart,
  PageServiceService,
} from '../../../features/page-services/page-service.service';
import { AtomAlertModalsComponent } from '../../components/atom-alert-modals/atom-alert-modals.component';
import { PublicService } from '../../logic/public.service';

@Component({
  selector: 'app-temp-package-installation',
  templateUrl: './temp-package-installation.component.html',
  styleUrls: ['./temp-package-installation.component.scss'],
})
export class TempPackageInstallationComponent implements OnInit {
  packageInstallationData: PackagesWelcome | undefined;
  subscriptionForm: FormGroup | undefined;

  initForm() {
    this.subscriptionForm = this.fb.group({
      phone_number: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  public ngOnInit(): void {
    this.initForm();
  }

  constructor(
    private http: HttpClient,
    private fb: FormBuilder,
    private dialog: MatDialog,
    private router: Router,
    private pageService: PageServiceService,
    private publicService: PublicService,
  ) {}

  handleSubscription() {
    if (this.currentForm?.valid) {
      this.publicService.generalLoading = true;
      this.http
        .post<PackagesWelcome>('/packages', this.currentForm?.value)
        .subscribe({
          next: (res) => {
            this.packageInstallationData = res;
            this.subscriptionForm = undefined;
            this.publicService.generalLoading = false;
          },
          error: (error) => this.handleError(error),
        });
    } else {
      this.currentForm?.markAllAsTouched();
    }
  }

  handlePay(item: Package) {
    this.publicService.generalLoading = true;
    this.http
      .post<InvoicePayStart>('/packages/pay', {
        transaction_id: item.hash,
        order_id: this.packageInstallationData?.order_id,
        amount: item.price,
        package_id: item.id,
      })
      .subscribe({
        next: (res) => {
          this.pageService.currentInvoiceStatus = res;
          this.subscriptionForm = undefined;
          this.publicService.generalLoading = false;
        },
        error: (error) => this.handleError(error),
      });
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
    this.initForm();
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
    const control = this.currentForm?.get(name);
    if (control) control.setValue(control?.value + String(val));
  }

  deleteAll(name: string) {
    const control = this.currentForm?.get(name);
    if (control) control.setValue('');
  }

  deleteLastNumber(name: string) {
    const control = this.currentForm?.get(name);
    if (control) control.setValue(String(control?.value).slice(0, -1));
  }
}

export interface PackagesWelcome {
  order_id: string;
  phone: string;
  packages: Package[];
}

export interface Package {
  id: number;
  price: number;
  title: string;
  type: number;
  hash: string;
}
