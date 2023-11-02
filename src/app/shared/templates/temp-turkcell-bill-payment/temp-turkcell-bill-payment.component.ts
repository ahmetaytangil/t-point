import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ROUTE_PATHS } from '../../../core/constants';
import { PageServiceService } from '../../../features/page-services/page-service.service';
import { AtomAlertModalsComponent } from '../../components/atom-alert-modals/atom-alert-modals.component';
import { PublicService } from '../../logic/public.service';

@Component({
  selector: 'app-temp-turkcell-bill-payment',
  templateUrl: './temp-turkcell-bill-payment.component.html',
  styleUrls: ['./temp-turkcell-bill-payment.component.scss'],
})
export class TempTurkcellBillPaymentComponent implements OnInit {
  method: string | undefined;
  localOtp = [1, 2, 3, 4, 5, 6];
  enableOtherPhoneSection: boolean = false;
  verificationForm: FormGroup | undefined;

  authForm: FormGroup | undefined;

  initForm() {
    this.authForm = this.fb.group({
      mobile_phone: ['', [Validators.required, Validators.minLength(11)]],
    });
  }

  public ngOnInit(): void {
    this.initForm();
  }

  constructor(
    private fb: FormBuilder,
    public pageService: PageServiceService,
    private dialog: MatDialog,
    public router: Router,
    public publicService: PublicService,
  ) {}

  handleVerification() {
    if (this.method === 'other' && !this.enableOtherPhoneSection) {
      this.enableOtherPhoneSection = true;
    } else {
      const form = this.verificationForm;

      if (form?.valid) {
        this.publicService.generalLoading = true;
        this.pageService.invoices(form.value).subscribe({
          next: (res) => {
            this.pageService.verifiedNumber = true;
            this.pageService.invoicesData = res;
            this.publicService.generalLoading = false;
          },
          error: (error) => this.handleError(error),
        });
      }
    }
  }

  handleStartLogin() {
    const form = this.authForm;

    if (form?.valid) {
      this.publicService.generalLoading = true;
      this.pageService.smsSend(form.value).subscribe({
        next: (res) => {
          this.verificationForm = this.fb.group({
            verification_code: [res.transaction_id, Validators.required],
            otp_code: ['', [Validators.required, Validators.minLength(6)]],
            phone_number: [
              this.method === 'own' ? form.value.mobile_phone : '',
              [Validators.required, Validators.minLength(11)],
            ],
          });
          this.publicService.generalLoading = false;
        },
        error: (error) => this.handleError(error),
      });
    } else {
      form?.markAllAsTouched();
    }
  }

  resetVerificationForm() {
    this.verificationForm = undefined;
  }

  get currentForm() {
    return this.verificationForm || this.authForm;
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

  getSlice(num: number) {
    return (
      this.verificationForm?.get('otp_code')?.value.slice(num - 1, num) || '-'
    );
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
    if (!this.method) {
      this.router.navigate(
        this.pageService.currentServiceName
          ? [
              ROUTE_PATHS.services + '/public',
              this.pageService.currentServiceName,
            ]
          : ['..'],
      );
    }

    if (
      this.method &&
      !this.pageService.verifiedNumber &&
      !this.verificationForm
    )
      this.method = undefined;

    if (this.verificationForm) this.verificationForm = undefined;
  }

  protected readonly ROUTE_PATHS = ROUTE_PATHS;
}
