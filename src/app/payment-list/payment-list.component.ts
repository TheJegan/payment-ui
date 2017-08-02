import { Component, OnInit } from '@angular/core';
import { Payment } from '../app.models';
import { OrganizationService } from "../organization.service"
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-payment-list',
  templateUrl: './payment-list.component.html',
  styleUrls: ['./payment-list.component.css']
})
export class PaymentListComponent implements OnInit {
  private payments: Payment[] = [];
  private organizationId;
  constructor(private route: ActivatedRoute, private router: Router, private organizationService: OrganizationService) {
    route.params.subscribe(params => {
      this.organizationId = params['orgId'];
      this.getOrganizationPayments(this.organizationId);
    });
  }

  ngOnInit() {
  }

  getOrganizationPayments(id) {
    this.organizationService.getOrganizationPayments(id)
      .subscribe(payments => {
        this.payments = payments;
      }, err => {
        console.log(err);
      });
  }
}
