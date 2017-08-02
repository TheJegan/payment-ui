import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authenticationSvc : AuthenticationService) { }

  ngOnInit() {
  }

  login(username, password) {
    // console.log(username.value + password.value);
    this.authenticationSvc.login(username.value, password.value)
      .subscribe(res => {
        console.log(res);
      },
      err => {
        console.log(err);
    })
  }
}
