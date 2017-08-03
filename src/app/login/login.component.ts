import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service'
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private organizationId;
  constructor(private authenticationSvc: AuthenticationService, private router: Router, private route: ActivatedRoute) {

    route.params.subscribe(params => {
      this.organizationId = params["id"];
    })

  }

  ngOnInit() {
  }

  login(username, password) {
    // console.log(username.value + password.value);
    this.authenticationSvc.login(username.value, password.value)
      .subscribe(res => {
        console.log(res);
        // this.auth.currentUser.setDisplayName(usr.displayName);
        // this.authenticationSvc.currentUser.setToken(res);
        if (res) {
          this.router.navigate([`/organization/${this.organizationId}/payment-list`]);
        }
      },
      err => {
        console.log(err);
      })
  }
}
