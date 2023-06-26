import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { ROUTE_PATHS } from "../../core/constants";

@Component({
  selector: 'page-buy',
  template: `
    <temp-header
        [list]="['Ek Paketler', '3 GB İnternet Paketi', 'Satın Al']"
        (onClickBack)="router.navigate([ROUTE_PATHS.extra_packages, ROUTE_PATHS.phone_number])"
    ></temp-header>
    <div class="container general-main">
      <div class="pb-100px">
        <div class="page-buy-container">
          <h2 class="page-buy-head">Lütfen Ödeme Yönteminizi Belirtin</h2>

          <div class="page-buy-btns">
            <div
              class="payment-btn mb-5"
              (click)="router.navigate([ROUTE_PATHS.extra_packages, ROUTE_PATHS.login_with_qr])"
            >
              <div class="paycell-image">
                <img [src]="'paycell-colored.png' | getSrc:'logo'" alt="">
              </div>
              <div class="payment-footer">
                Paycell QR ile Öde
              </div>
            </div>

            <div
              (click)="router.navigate([ROUTE_PATHS.extra_packages, ROUTE_PATHS.after_payment])"
              class="payment-btn"
            >
              <div class="paye-image">
                <img [src]="'paycell-payment.png' | getSrc:'common'" alt="">
              </div>
              <div class="payment-footer">
                Paye ve Kredi Kartları ile Öde
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./page-buy.component.scss']
})
export class PageBuyComponent {
  protected readonly ROUTE_PATHS = ROUTE_PATHS;

  constructor(public router: Router) {}

}
