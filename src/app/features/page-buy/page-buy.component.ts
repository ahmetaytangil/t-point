import { Component } from '@angular/core';

@Component({
  selector: 'page-buy',
  template: `
    <temp-header
        [list]="['Ek Paketler', '3 GB İnternet Paketi', 'Satın Al']"
    ></temp-header>
    <div class="container py-50px">
      <div class="pb-100px">
        <div class="page-buy-container">
          <h2 class="page-buy-head">Lütfen Ödeme Yönteminizi Belirtin</h2>

          <div class="page-buy-btns">
            <div class="payment-btn mb-5">
              <div class="paycell-image">
                <img [src]="'paycell-colored.png' | getSrc:'logo'" alt="">
              </div>
              <div class="payment-footer">
                Paycell QR ile Öde
              </div>
            </div>

            <div class="payment-btn">
              <div class="paye-image">
                <img [src]="'qr-colored.png' | getSrc:'logo'" alt="">
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

}
