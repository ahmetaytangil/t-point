import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ROUTE_PATHS } from '../../../core/constants';
import { LoginService } from '../../../features/page-login/page-login.service';
import { PageServiceService } from '../../../features/page-services/page-service.service';
import { io } from 'socket.io-client';
import { PublicService } from '../../logic/public.service';

@Component({
  selector: 'app-temp-status-socket',
  templateUrl: './temp-status-socket.component.html',
  styleUrls: ['./temp-status-socket.component.scss'],
})
export class TempStatusSocketComponent implements OnInit {
  public currentSocketData: KIOSK_res | undefined;

  constructor(
    public pageService: PageServiceService,
    private loginService: LoginService,
    private publicService: PublicService,
    private router: Router,
  ) {}

  public ngOnInit(): void {
    const token = this.loginService.userWelcome?.token;

    if (token) {
      const socket = io('wss://posplus-dev.paymentapi.com.tr/wss', {
        reconnectionDelay: 1000,
        reconnectionAttempts: 10,
        extraHeaders: {
          authorization: `Bearer ${token}`,
        },
      });

      socket.on('KIOSK', (res: KIOSK_res) => {
        const serial_no = this.publicService.serial_number;
        const order_code = this.pageService.currentInvoiceStatus?.order_code;
        if (serial_no === res.serial_no && res.data.order_code === order_code) {
          this.currentSocketData = res;

          const status = ['PAYMENT_SUCCESS', 'INVOICE_SUCCESS'];

          if (status.includes(res.status)) {
            const data = this.pageService.invoicesData;

            if (data) {
              this.pageService.invoicesData = {
                order_id: data.order_id,
                invoices: data.invoices.filter(
                  (f) => f.order_id !== res.data.order_code,
                ),
              };
            }
          }
        }
      });
    }
  }

  handlePrev() {
    this.pageService.currentInvoiceStatus = undefined;
    this.currentSocketData = undefined;
  }

  handleFinish() {
    this.currentSocketData = undefined;
    this.router.navigate(
      this.pageService.currentServiceName
        ? [
            ROUTE_PATHS.services + '/public',
            this.pageService.currentServiceName,
          ]
        : ['..'],
    );
  }
}

export interface KIOSK_res {
  serial_no: string;
  action: string;
  status: string;
  message: string;
  data: Data;
}

export interface Data {
  order_code: string;
}
