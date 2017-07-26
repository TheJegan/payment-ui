import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { CONFIG } from './config';
import { Organization } from './app.models'
import 'rxjs/Rx';

@Injectable()
export class OrganizationService {
  private url: string = CONFIG.paymentServiceUrl;
  constructor(private http: Http) { }

  getOrganizations(): Observable<Organization> {
    return this.http.get(`${this.url}/api/organizations`)
    .map(this.transformToJSON);
  }

  getOrganizationById(id): Observable<Organization> {
    return this.http.get(`${this.url}/api/organizations/${id}`)
    .map(this.transformToJSON);
  }

  createOrganization(name, address) : Observable<Organization> {
    return this.http.post(`${this.url}/api/organizations/`, {name: name, address: address})
    .map(this.transformToJSON);
  }
  transformToJSON(res: any) {
    return res.json() || {};
  }
}
