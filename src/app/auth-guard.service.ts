import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthenticationService } from './authentication.service';

@Injectable()
export class AuthGuardService implements CanActivate{

  constructor(private router: Router, private auth: AuthenticationService) {

  }
  activate() {
    console.log('call active');
  }

  public canActivate() {
    return this.auth.currentUser.isLoggedIn();
  }

}
