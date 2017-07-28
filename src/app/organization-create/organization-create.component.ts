import { Component, OnInit } from '@angular/core';
import { OrganizationService } from "../organization.service"
import { Organization } from "../app.models";
import { Router } from '@angular/router';

@Component({
  selector: 'app-organization-create',
  templateUrl: './organization-create.component.html',
  styleUrls: ['./organization-create.component.css']
})
export class OrganizationCreateComponent implements OnInit {
  private name: string;
  private address: string;
  constructor(private router: Router, private organizationService : OrganizationService) { }

  ngOnInit() {
  }

  createOrganization(name, address) {
    var organization = new Organization();

    organization.name = name.value;
    organization.address = address.value;
    organization.city = "test city";
    organization.state = "test state";
    organization.zip = "98125";

    this.organizationService.createOrganization(organization).subscribe(
      success=>{
        // alert('org created');
        this.router.navigate([`/organizations`])
      },
      err=>{
        alert("org failed");
      }
    )
  }

}
