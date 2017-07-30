import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { CONFIG } from './config';
import { Organization, Payment } from './app.models'
import 'rxjs/Rx';

@Injectable()
export class OrganizationService {
  private url: string = CONFIG.paymentServiceUrl;
  constructor(private http: Http) { }

  getOrganizations(): Observable<Organization[]> {
    return this.http.get(`${this.url}/api/organizations`)
    .map(this.transformToJSON);
  }

  getOrganizationById(id): Observable<Organization> {
    return this.http.get(`${this.url}/api/organizations/${id}`)
    .map(this.transformToJSON);
  }

  getOrganizationPayments(id): Observable<Payment[]> {
    return this.http.get(`${this.url}/api/organizations/${id}/payments`)
      .map(this.transformToJSON);
  }

  createOrganization(organization) : Observable<Organization> {
    return this.http.post(`${this.url}/api/organizations/`, organization)
      .map(this.transformToJSON);
  }
  transformToJSON(res: any) {
    return res.json() || {};
  }
}
