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

  createOrganization(name, address, city, state, zip) {
    var organization = new Organization();

    organization.name = name.value;
    organization.address = address.value;
    organization.city = city.value;
    organization.state = state.value;
    organization.zip = zip.value;

    this.organizationService.createOrganization(organization).subscribe(
      success=>{
        // alert('org created');
        this.router.navigate([`/organization/list`])
      },
      err=>{
        alert("org failed");
      }
    )
  }

}
