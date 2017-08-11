import { Component, OnInit, Input } from '@angular/core';
import { Payment } from '../app.models';
import { OrganizationService } from "../organization.service"
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
// import { MomentModule } from 'angular2-moment';
import { OrderByPipe } from "../orderby";


@Component({
  selector: 'app-payment-list',
  templateUrl: './payment-list.component.html',
  styleUrls: ['./payment-list.component.css'],
})
export class PaymentListComponent implements OnInit {
  private payments: Payment[] = [];
  private organizationId;
  constructor(private route: ActivatedRoute, private router: Router, private organizationService: OrganizationService) {

    route.params.subscribe(params => {
      this.organizationId = params['orgId'];
      if (this.organizationId) {
        this.getOrganizationPayments(this.organizationId);

        window.setInterval(() => { this.getOrganizationPayments(this.organizationId) }, 4000);
      }
    });
  }

  ngOnInit() {
  }

  getOrganizationPayments(id) {
    console.log('getting organization payments');

    if (id) {
      this.organizationService.getOrganizationPayments(id)
        .subscribe(payments => {
          this.payments = payments.sort((a: Payment, b: Payment) => { return new Date(b.createdDate).getTime() - new Date(a.createdDate).getTime() });
          // this.payments = payments;
        }, err => {
          console.log(err);
        });
    }
  }

  getPaymentDate(date) {
    let temp = new Date(date);
    let ONE_HOUR = 60 * 60 * 1000;

    // if (((new Date) - temp) < ONE_HOUR)
    //   return 'minutes';


    //   case "day":
    //     return 'hours';
    //   default:
        return date
    // }
  }


}
