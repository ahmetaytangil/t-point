import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { ROUTE_PATHS } from "../../core/constants";

@Component({
  selector: 'page-extra-packages',
  template: `
    <div class="page-extra-packages">
      <temp-banner></temp-banner>

      <div class="container py-50px">
        <atom-line-card
          [image]="'superonline.png' | getSrc:'logo'"
          [disable]="true"
          head="İnternet Faturanı Öde"
        ></atom-line-card>
        <atom-line-card
          [image]="'paycell.png' | getSrc:'logo'"
          [disable]="true"
          head="Paycell Bakiyene Ekleme Yap"
        ></atom-line-card>
        <atom-line-card
          [image]="'paycell.png' | getSrc:'logo'"
          [disable]="true"
          head="Faturalarım"
        ></atom-line-card>
        <atom-line-card
          [image]="'turkcell-colored.png' | getSrc:'logo'"
          head="Paket Al"
          (onClick)="router.navigate([ROUTE_PATHS.extra_packages, ROUTE_PATHS.packages, 123])"
        ></atom-line-card>
      </div>

    </div>
  `,
  styleUrls: ['./page-extra-packages.component.scss']
})
export class PageExtraPackagesComponent {
  ROUTE_PATHS = ROUTE_PATHS

  constructor(public router: Router) {}

}
