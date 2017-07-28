import { Component, OnInit } from '@angular/core';
import { OrganizationService } from '../organization.service';
import { Organization } from '../app.models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-organization-list',
  templateUrl: './organization-list.component.html',
  styleUrls: ['./organization-list.component.css']
})
export class OrganizationListComponent implements OnInit {
  private organizations: Organization[] = [];
  constructor( private router: Router, private organizationService: OrganizationService) {
    this.getOrgList();
  }

  ngOnInit() {
  }

  getOrgList() {
    this.organizationService.getOrganizations()
      .subscribe(
      org => {
        this.organizations = org;
      },
      err => {
        alert("Failed");
      });
  }
}
