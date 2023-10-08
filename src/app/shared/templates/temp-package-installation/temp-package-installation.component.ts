import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ROUTE_PATHS } from '../../../core/constants';
import { PageServiceService } from '../../../features/page-services/page-service.service';
import { AtomAlertModalsComponent } from '../../components/atom-alert-modals/atom-alert-modals.component';

@Component({
  selector: 'app-temp-package-installation',
  templateUrl: './temp-package-installation.component.html',
  styleUrls: ['./temp-package-installation.component.scss'],
})
export class TempPackageInstallationComponent {
  packageInstallationData: PackagesWelcome[] = [];
  subscriptionForm = this.fb.group({
    phone_number: [
      '05353680548',
      [Validators.required, Validators.minLength(10)],
    ],
  });

  constructor(
    private http: HttpClient,
    private fb: FormBuilder,
    private dialog: MatDialog,
    private router: Router,
    private pageService: PageServiceService,
  ) {}

  handleSubscription() {
    if (this.currentForm.valid) {
      this.http
        .post<PackagesWelcome[]>('/packages', this.currentForm.value)
        .subscribe({
          next: (res) => {
            this.packageInstallationData = res;
          },
          error: (error) => this.handleError(error),
        });
    } else {
      this.currentForm.markAllAsTouched();
    }
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

export interface PackagesWelcome {
  id: number;
  type: number;
  title: string;
  price: number;
  is_card: boolean;
}
