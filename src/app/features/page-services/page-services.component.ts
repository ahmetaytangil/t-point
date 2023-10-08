import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ROUTE_PATHS } from '../../core/constants';
import { AtomAlertModalsComponent } from '../../shared/components/atom-alert-modals/atom-alert-modals.component';

@Component({
  selector: 'app-page-services',
  templateUrl: './page-services.component.html',
  styleUrls: ['./page-services.component.scss'],
})
export class PageServicesComponent {
  constructor(
    public router: Router,
    private dialog: MatDialog,
  ) {}

  handleAlert() {
    this.dialog.open(AtomAlertModalsComponent, {
      data: {
        type: 'yellow',
        name: 'ÇOK YAKINDA',
        desc: 'Bu hizmetimiz en kısa sürede yayına açılacaktır. Şuan hizmet verememekteyiz.',
      },
    });
  }

  protected readonly ROUTE_PATHS = ROUTE_PATHS;
}
