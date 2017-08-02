import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PaymentService } from '../payment.service';
import { OrganizationService } from '../organization.service';
import { Payment, Organization } from '../app.models';
import { CONFIG } from '../config'

@Component({
  selector: 'app-payment-create',
  templateUrl: './payment-create.component.html',
  styleUrls: ['./payment-create.component.css']
})
export class PaymentCreateComponent implements OnInit {
  private organizationId: string;
  private organization: Organization = new Organization();
  private paymentUIUrl = CONFIG.paymentClientUrl;

  constructor(private route: ActivatedRoute, private paymentService: PaymentService, private organizationService: OrganizationService, private router: Router) {
    route.params.subscribe(params => {
      this.organizationId = params['orgId'];
      this.getOrgById(this.organizationId);
    });
  }

  ngOnInit() {
  }

  getOrgById(id) {
    this.organizationService.getOrganizationById(id)
      .subscribe(organization => {
        console.log(organization);
        this.organization = organization; //fix this
      }, err => {
        alert(err);
      });
  }

  canSubmit() {

  }

  paymentBtnMarkup() {
    var paymentMarkup = `<form action="${this.paymentUIUrl}/organization/${this.organizationId}/payment-create">
    <button type="submit" style="
    background: #9ad14b;
    color: #795548;
    display: inline-block;
    padding: 6px 12px;
    border: 1px solid transparent;
    border-radius: 4px;
    font-size: 14px;
    font-weight: 600;
    ">
      Go To Avocado Payment System
    </button>
  </form>`;

    return paymentMarkup;
  }

  create(amount) {
    console.log('create payment')
    console.log(amount);
    var payment = new Payment();
    payment._user = '5979001715880e0011a1ec27';
    payment._property = this.organizationId;
    payment.amount = amount.value;

    this.paymentService.createPayment(payment)
      .subscribe(payment => {
        // alert('payment successful');
        this.router.navigate([`/payment/${payment._id}`]);
      }, err => {
        alert('fail');
        console.log(err);
      });
  }


}