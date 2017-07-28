import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { CONFIG } from './config';
import { Payment } from './app.models';
import 'rxjs/Rx';

@Injectable()
export class PaymentService {
  private url: string = `${CONFIG.paymentServiceUrl}/api/payments`;
  // `${this.url}/api/payments/
  constructor(private http: Http) { }

  getPaymentById(id: string): Observable<Payment> {
    return this.http.get(`${id}`)
      .map(this.transformToJSON);
  }

  getPayments(): Observable<Payment> {
    return this.http.get(`${this.url}`)
      .map(this.transformToJSON);
  }

  createPayment(payment:Payment) : Observable<Payment> {
    return this.http.post(`${this.url}`, payment)
    .map(this.transformToJSON);
  }

  transformToJSON(res: any) {
    return res.json() || {};
  }
}
