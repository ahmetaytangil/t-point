import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ROUTE_PATHS } from '../../core/constants';
import { AtomAlertModalsComponent } from '../../shared/components/atom-alert-modals/atom-alert-modals.component';

@Component({
  selector: 'app-page-welcome',
  templateUrl: './page-welcome.component.html',
  styleUrls: ['./page-welcome.component.scss'],
})
export class PageWelcomeComponent implements OnInit {
  constructor(
    private dialog: MatDialog,
    public router: Router,
  ) {}

  public ngOnInit(): void {
    this.dialog.open(AtomAlertModalsComponent, {
      data: {
        type: 'red',
        name: 'İPUCU!',
        desc: 'Çıkış yapmak için sol üstte bulunan Turkcell icon’una 5 kez basmanız gerekmektedir.',
      },
    });
  }

  protected readonly ROUTE_PATHS = ROUTE_PATHS;
}
