import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaymentService } from '../payment.service';
import { OrganizationService} from '../organization.service';
import { Payment, Organization } from '../app.models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment-create',
  templateUrl: './payment-create.component.html',
  styleUrls: ['./payment-create.component.css']
})
export class PaymentCreateComponent implements OnInit {
  private organizationId:string;
  private organization:Organization = new Organization();

  constructor(private route: ActivatedRoute, private paymentService: PaymentService, private organizationService:OrganizationService, private router: Router ) {
    route.params.subscribe(params => {
      this.organizationId = params['orgId'];
      this.getOrgById(this.organizationId);
    });
  }

  ngOnInit() {
  }

  getOrgById(id){
    this.organizationService.getOrganizationById(id)
    .subscribe(organization =>{
      console.log(organization);
      this.organization = organization; //fix this
    }, err=>{
      alert(err);
    });
  }

  canSubmit(){
    
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
      });
  }

  
}