import { Component, OnInit } from '@angular/core';
import { PaymentService } from '../payment.service';
import { ActivatedRoute } from '@angular/router';
import { Payment} from "../app.models";

@Component({
  selector: 'app-payment-detail',
  templateUrl: './payment-detail.component.html',
  styleUrls: ['./payment-detail.component.css']
})
export class PaymentDetailComponent implements OnInit {
  private amount: string;
  private paymentId;
  private payment: Payment = new Payment();

  constructor(private route: ActivatedRoute, private paymentService: PaymentService) {
    // this.paymentService.getPaymentById()
    route.params.subscribe(params => {
      this.paymentId = params['id'];

      console.log(this.paymentId);

      this.getPayment(this.paymentId).subscribe(
        payment => {
          console.log(payment);
          console.log("payment works");
          // this.payment = payment;
        },
        err => {
          console.log(err);
        }
      )
    });
  }

  ngOnInit() {
  }

  getPayment(id) {
    return this.paymentService.getPaymentById(id);
  }

}
