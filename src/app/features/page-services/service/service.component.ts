import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ROUTE_PATHS } from '../../../core/constants';
import { AtomAlertModalsComponent } from '../../../shared/components/atom-alert-modals/atom-alert-modals.component';
import { PageServiceService } from '../page-service.service';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss'],
})
export class ServiceComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    public pageService: PageServiceService,
    public router: Router,
    private dialog: MatDialog,
  ) {}

  public ngOnInit(): void {
    const service_name = this.route.snapshot.paramMap.get('service_name');
    this.pageService.currentServiceName = service_name || undefined;
  }

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
