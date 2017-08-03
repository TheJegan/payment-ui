import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrganizationService } from "../organization.service";
import { Payment } from '../app.models';
@Component({
  selector: 'app-organization-detail',
  templateUrl: './organization-detail.component.html',
  styleUrls: ['./organization-detail.component.css']
})
export class OrganizationDetailComponent implements OnInit {
  private organizationId: string;
  private payments: Payment[];
  constructor(private router: Router, private route: ActivatedRoute, private organizationSvc: OrganizationService) {

    route.params.subscribe(params => {
      this.organizationId = params['id'];
    });
  }

  ngOnInit() {
  }

  // getOrganization() {
  //   this.organizationSvc.getOrganizationPayments(this.organizationId).subscribe(payments => {
  //     this.payments = payments;
  //   }, error => {

  //   });
  // }
}
