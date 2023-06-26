import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { ROUTE_PATHS } from "../../core/constants";

@Component({
  selector: 'page-packages',
  template: `
    <temp-header
        [list]="['Ek Paketler']"
        (onClickBack)="router.navigate([ROUTE_PATHS.extra_packages])"
    ></temp-header>
   <div class="container general-main">
     <atom-line-card
       [disable]="true"
       head="Instagram Paketi 6 GB"
       [subItems]="{
          price: '62',
          price_sub: '/2 HAFTA',
          currency: 'TL',
          sub_text: '3GB',
          sub_name: 'İNTERNET'
        }"
     ></atom-line-card>
     <atom-line-card
       [disable]="true"
       head="10 GB İnternet Paketi + 10 GB H..."
       [subItems]="{
          price: '209',
          price_sub: '/2 HAFTA',
          currency: 'TL',
          sub_text: '10GB',
          sub_name: 'İNTERNET'
        }"
     ></atom-line-card>
     <atom-line-card
       [disable]="true"
       head="Sosyal Paket 10 GB"
       [subItems]="{
          price: '48',
          price_sub: '/2 HAFTA',
          currency: 'TL',
          sub_text: '10GB',
          sub_name: 'İNTERNET'
        }"
     ></atom-line-card>
     <atom-line-card
       head="3 GB İnternet Paketi"
       (onClick)="router.navigate([ROUTE_PATHS.extra_packages, ROUTE_PATHS.package_detail, 123])"
       [subItems]="{
          price: '125',
          price_sub: '/2 HAFTA',
          currency: 'TL',
          sub_text: '3GB',
          sub_name: 'İNTERNET'
        }"
     ></atom-line-card>
     <atom-line-card
       [disable]="true"
       head="Sosyal Paylaşım Paketi 6 GB"
       [subItems]="{
          price: '62',
          price_sub: '/2 HAFTA',
          currency: 'TL',
          sub_text: '6GB',
          sub_name: 'İNTERNET'
        }"
     ></atom-line-card>
   </div>
  `,
  styleUrls: ['./page-packages.component.scss']
})
export class PagePackagesComponent {
  ROUTE_PATHS = ROUTE_PATHS
  constructor(public router: Router) {}

}
