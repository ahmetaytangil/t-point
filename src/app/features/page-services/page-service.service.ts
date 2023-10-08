import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PageServiceService {
  currentServiceName: string | undefined;
  detailName: string | undefined;
  verifiedNumber: boolean = false;
  currentInvoiceStatus: InvoicePayStart | undefined;
  invoicesData: InvoiceWelcome | undefined;

  constructor(private http: HttpClient) {}

  smsSend(body: any) {
    return this.http.post<SmsWelcome>('/sms/send', body);
  }

  invoices(body: any) {
    return this.http.post<InvoiceWelcome>('/invoices', body);
  }

  invoicePay(value: {
    transaction_id: string;
    amount: number;
    order_id: string;
  }) {
    return this.http.post<InvoicePayStart>('/invoices/pay', value);
  }

  superOnlinePay(value: {
    transaction_id: string;
    amount: number;
    order_id: string;
  }) {
    return this.http.post<InvoicePayStart>('/superonline/pay', value);
  }
}

export interface SmsWelcome {
  transaction_id: string;
  completed: boolean;
}

export interface InvoiceWelcome {
  order_id: string;
  invoices: Invoice[];
}

export interface Invoice {
  order_id: string;
  phone: string;
  invoice_date: string;
  invoice_no: string;
  name: string;
  period: string;
  amount: number;
  due_date: string;
  type: string;
  invoice_id: string;
  hash: string;
}

export interface InvoicePayStart {
  id: string;
  order_code: string;
  total_amount: number;
  amount_due: number;
  status: string;
}

export interface BalanceInstallationWelcome {
  order_id: string;
  phone: string;
  packages: Package[];
}

export interface Package {
  id: number;
  price: number;
  hash: string;
}
