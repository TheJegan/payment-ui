import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { CONFIG } from './config';
import 'rxjs/Rx';

@Injectable()
export class PaymentService {
  private url: string = CONFIG.paymentServiceUrl;
  constructor(private http: Http) { }

  getPaymentById(id: string) : Observable<any>{
    return this.http.get(`${this.url}/api/payment/${id}`)
      .map(this.transformToJSON);
  }

  transformToJSON(res: any) {
    return res.json() || {};
  }
}
