import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ROUTE_PATHS } from '../../core/constants';
import { AtomAlertModalsComponent } from '../../shared/components/atom-alert-modals/atom-alert-modals.component';
import { PublicService } from '../../shared/logic/public.service';
import { LoginService } from './page-login.service';

@Component({
  selector: 'app-page-login',
  templateUrl: './page-login.component.html',
  styleUrls: ['./page-login.component.scss'],
})
export class PageLoginComponent implements OnInit {
  authForm: FormGroup = this.fb.group({
    serial_no: ['', Validators.required],
    mobile_phone: ['', [Validators.required, Validators.minLength(10)]],
  });

  verificationForm: FormGroup | undefined;

  localOtp = [1, 2, 3, 4, 5, 6];

  constructor(
    private fb: FormBuilder,
    private publicService: PublicService,
    private loginService: LoginService,
    private dialog: MatDialog,
    public router: Router,
  ) {}

  public ngOnInit(): void {
    this.authForm.get('serial_no')?.setValue(this.publicService.serial_number);
  }

  handleStartLogin() {
    const form = this.authForm;

    if (form.valid) {
      this.loginService.authLogin(form.value).subscribe({
        next: (res) => {
          if (res.completed)
            this.verificationForm = this.fb.group({
              verification_code: [res.verification_code, Validators.required],
              otp_code: ['', [Validators.required, Validators.minLength(6)]],
            });
        },
        error: (error) => this.handleError(error),
      });
    } else {
      form.markAllAsTouched();
    }
  }

  handleError(error: any) {
    this.dialog.open(AtomAlertModalsComponent, {
      data: {
        type: 'red',
        name: 'HATA!',
        desc: error,
      },
    });
  }

  handleVerification() {
    const form = this.verificationForm;

    if (form?.valid) {
      this.loginService
        .authVerification({
          verification_code: form.value.verification_code,
          otp_code: form.value.otp_code.slice(0, 6),
        })
        .subscribe({
          next: (res) => {
            this.loginService.userWelcome = res;
            this.loginService.saveUserToLocalStorage(res);
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

  getValid(name: string) {
    return {
      'is-invalid':
        this.authForm.controls[name].invalid &&
        this.authForm.controls[name].touched,
      'is-valid':
        this.authForm.controls[name].valid &&
        this.authForm.controls[name].touched,
    };
  }

  get currentForm() {
    return this.verificationForm || this.authForm;
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

  getSlice(num: number) {
    return (
      this.verificationForm?.get('otp_code')?.value.slice(num - 1, num) || '-'
    );
  }

  protected readonly ROUTE_PATHS = ROUTE_PATHS;
}
