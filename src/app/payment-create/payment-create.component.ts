import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaymentService } from '../payment.service';
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

  }
}
