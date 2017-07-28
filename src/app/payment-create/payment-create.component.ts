import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaymentService } from '../payment.service';
import { Payment } from '../app.models'
@Component({
  selector: 'app-payment-create',
  templateUrl: './payment-create.component.html',
  styleUrls: ['./payment-create.component.css']
})
export class PaymentCreateComponent implements OnInit {

  constructor(private route: ActivatedRoute, private paymentService: PaymentService) {
    // route.params.subscribe(params => {
    // });
  }

  ngOnInit() {
  }

  create(amount) {
    console.log('create payment')
    console.log(amount);
    var payment = new Payment();
    payment.propertyId = '5979001715880e0011a1ec27';
    payment.userId = '5978ff8015880e0011a1ec26';
    payment.amount = amount.value;

    this.paymentService.createPayment(payment)
      .subscribe(payment => {
        alert('payment successful');
      }, err => {
        alert('fail');
      });
  }
}