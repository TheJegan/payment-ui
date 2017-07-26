import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { CONFIG } from './config';
import { User } from './app.models'
import 'rxjs/Rx';

@Injectable()
export class UserService {
  private url: string = CONFIG.paymentServiceUrl;
  constructor(private http: Http) { }

  getUser() : Observable<User> {
    return this.http.get(`${this.http}/api/user`)
    .map(this.transformToJSON);
  }

  getUserById(id) : Observable<User>{
    return this.http.get(`${this.http}/api/user/${id}`)
    .map(this.transformToJSON);
  }

  createUser(User){
    return this.http.post(`${this.http}/api/user`, User)
    .map(this.transformToJSON)
  }

  transformToJSON(res: any) {
    return res.json() || {};
  }
}
