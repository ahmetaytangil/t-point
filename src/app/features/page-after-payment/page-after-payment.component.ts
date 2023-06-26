import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { ROUTE_PATHS } from "../../core/constants";

@Component({
  selector: 'page-after-payment',
  templateUrl: './page-after-payment.component.html',
  styleUrls: ['./page-after-payment.component.scss']
})
export class PageAfterPaymentComponent {
  constructor(public router: Router) {}

  protected readonly ROUTE_PATHS = ROUTE_PATHS;
}
