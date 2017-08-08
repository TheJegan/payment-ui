import { Component, OnInit, Input } from '@angular/core';
import { Payment } from '../app.models';
import { OrganizationService } from "../organization.service"
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { MomentModule } from 'angular2-moment';

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

        window.setInterval( ()=> { this.getOrganizationPayments(this.organizationId)}, 4000);
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
        this.payments = payments;
      }, err => {
        console.log(err);
      });
    }
  }

  getPaymentDate(date) {
    return date;
  }
}
