import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { CONFIG } from './config'
import { Http, Headers } from '@angular/http';
import { User } from './app.models';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthenticationService {
  public currentUser: UserProfile;// = new UserProfile(); //make observable for any changes to end up in localStorage
  private url = `${CONFIG.paymentServiceUrl}/auth`;

  constructor(private http: Http) {
    this.currentUser = new UserProfile();
  }

  public login(username: string, password: string): Observable<User> {
    return this.http.post(`${this.url}/login/`, { username: username, password: password })
      .map(this.transformToJSON);
  }

  public logout() {
    this.currentUser.clear();
    return this.http.get(`${this.url}/logout/`)
      .map(this.transformToJSON);
  }

  private transformToJSON(res: any) {
    return res.json() || {};
  }
}


class UserProfile {

  public resync = new Subject();

  public isLoggedIn() {
    return !!this.getToken();
  }

  public getUserId(): string {
    return localStorage.getItem('userId');
  }

  public setUserId(userId): void {
    localStorage.setItem('userId', userId);
    this.resync.next();
  }

  public setDisplayName(displayName): void {
    localStorage.setItem('displayName', displayName);
    this.resync.next();
  }

  public getDisplayName(): string {
    return localStorage.getItem('displayName');
  }

  public setToken(token): void {
    localStorage.setItem('token', token);
    this.resync.next();
  }

  public getToken(): string {
    return localStorage.getItem('token');
  }

  public clear(): void {
    localStorage.clear();
    this.resync.next();
  }
}