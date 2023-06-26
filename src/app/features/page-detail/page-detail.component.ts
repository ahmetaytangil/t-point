import { Component } from '@angular/core';
import { ROUTE_PATHS } from "../../core/constants";
import { Router } from "@angular/router";

@Component({
  selector: 'page-detail',
  template: `
    <temp-header
      [list]="['Ek Paketler', '3 GB İnternet Paketi']"
      (onClickBack)="router.navigate([ROUTE_PATHS.extra_packages, ROUTE_PATHS.packages, 123])"
    ></temp-header>
    <div class="container general-main">
      <div class="detail-container">
        <div class="detail-col">
          <img class="w-100 detail-image" [src]="'3gb.png' | getSrc:'common'" alt="">
        </div>
        <div class="detail-col">
          <div class="detail-snackbar">
            3 GB İnternet Paketi
          </div>
          <div class="detail-information">
            <div class="detail-info-cell">
              <div>
                <h2 class="detail-info-cell-head">3GB</h2>
                <h2 class="detail-info-cell-name">İNTERNET</h2>
                <h2 class="detail-info-cell-sub">2 Hafta</h2>
              </div>
            </div>
            <div class="detail-info-cell">
              <h2 class="detail-info-cell-price">125 <span class="currency">TL</span></h2>
            </div>
          </div>
        </div>
        <div class="detail-col landscape-col">
          <div class="landscape-col-btn">
            <atom-button
              variant="primary mx-auto"
              text="Hemen Al"
              (onClick)="router.navigate([ROUTE_PATHS.extra_packages, ROUTE_PATHS.phone_number])"
            ></atom-button>
          </div>
        </div>
      </div>

      <div class="not-landscape-button">
        <atom-button
          variant="primary mx-auto"
          text="Hemen Al"
          (onClick)="router.navigate([ROUTE_PATHS.extra_packages, ROUTE_PATHS.phone_number])"
        ></atom-button>
      </div>

      <div class="detail-paragraph-container">
        <p class="detail-paragraph">
          2 Hafta Boyunca Geçerli Olan 3 GB İnternet Paketi'ni İnternet Paketinize Ek Olarak Alın, İnternet
          Keyfini Dilediğinizce Yaşayın.
        </p>
        <ul class="detail-list">
          <li>
            3 GB İnternet Paketinden kurumsal faturalı ses hattı sahibi aboneler faydalanabilir.
          </li>
          <li>
            Satın almak için CEPTEN 2HAFTALIK 3GByazıp 2200'a SMS gönderebilirsiniz.
          </li>
          <li>
            Fiyatlara KDV ve ÖİV dahildir. Vergiler hakkında detaylı bilgi için tıklayınız.
          </li>
          <li>
            Paket anında aktif edilir, 2 hafta süresince geçerlidir.
          </li>
          <li>
            Paket aktiflendikten sonraki fatura kesim tarihinde ücret gün bazlı olarak hesaplanarak Mobil
            İletişim Faturasına yansıtılır.
          </li>
          <li>
            Haftalık 2 GB internet paketi alan müşterilerimize 2 Haftalık 3 GB internet paketi önerilecek
            olup, önerilen ek pakete geçiş sağlayan ve Haftalık 2 GB internet paketinden 200MB ve üzeri
            kullanım yapmamış olma şartını sağlayan müşterilerimden Haftalık 2 GB internet paketi ve ücreti
            silinerek, 2 Haftalık 3 GB İnternet paketi tanımlanıp sadece bu paketin ücreti yansıtılacaktır.
          </li>
          <li>
            Paket kapsamında verilen fayda 2 haftadan önce biterse bittiği tarihten sonraki ilk Mobil İletişim
            Faturasına paketin ücreti tek seferde yansıtılır.
          </li>
          <li>
            Paketinizin kotasını doldurmanız durumunda 100 MB’a kadar yapacağınız kullanımlar 5,10 TL olarak
            ücretlendirilecektir. Kullanıma devam ederdeniz her 100 MB / 5,10 TL olarak ücretlendirilirsiniz.
            Paket aşım bedeli en fazla 203,98 TL sınırına ulaştığı zaman kullanım hızınız 1 Kbps’ye
            düşürülecektir. Paket aşımı yapan bir hat fatura kesim tarihi öncesinde operatör değiştirir ya da
            kapatılırsa varsa tamamı kullanılmış 100 MB aşımlar için 5,10 TL ücretlenir, henüz bitirilmemiş
            100 MB için ise “(paket ücreti/ilgili ayın gün sayısı) x paketin hatta aktif tanımlı olduğu gün
            sayısı” şeklinde hesaplanan bedel faturasına yansıtılacaktır.
          </li>
          <li>
            14 Gün içerisinde kullanılmayan paket kotası bir sonraki döneme devretmez. Ticari gelir elde etmek
            amacıyla kullanılamaz, satılamaz. Tespit edilen aboneler ile ilgili yasal işlem yapılacak ve
            hatları tek taraflı olarak iptal edilebilecektir.
          </li>
          <li>
            Turkcell, internet üzerinden mesajlaşma ve ses iletişimi (IM ve VOIP), internet paylaşımı
            (Tethering) ve doğrudan dosya paylaşım (P2P) programları vb. hizmetlerinin internet paketleri ile
            kullanımlarında değişiklik yapma hakkını saklı tutar.
          </li>
          <li>
            Paket sadece internet erişim noktası kullanılarak yapılan yurt içi bağlantılarda geçerlidir.
            İnternet erişim noktası, BlackBerry cihazları tarafından kullanılan BlackBerry erişim noktaları
            pakete dahil değildir.
          </li>
          <li>
            Diğer internet paketleriyle birlikte alındığında kullanım önceliklendirmesi şu şekilde olacaktır:
            3 Saatlik 3 GB Paketi > Günlük 1 GB Paketi > 1 GB İnternet Paketi > 2 GB İnternet Paketi > 3 GB
            İnternet Paketi > 6 GB İnternet Paketi > 10 GB İnternet Paketi > 20 GB İnternet Paketi.
          </li>
        </ul>
      </div>
    </div>
  `,
  styleUrls: [ './page-detail.component.scss' ]
})
export class PageDetailComponent {
  ROUTE_PATHS = ROUTE_PATHS;

  constructor(public router: Router) {}
}
