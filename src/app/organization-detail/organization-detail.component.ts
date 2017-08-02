import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-organization-detail',
  templateUrl: './organization-detail.component.html',
  styleUrls: ['./organization-detail.component.css']
})
export class OrganizationDetailComponent implements OnInit {
  private organizationId: string;
  constructor(private router: Router, private route: ActivatedRoute, ) {
    route.params.subscribe(params => {
      this.organizationId = params['id'];
    });
  }

  ngOnInit() {
  }


}
