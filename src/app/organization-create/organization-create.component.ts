import { Component, OnInit } from '@angular/core';
import { OrganizationService } from "../organization.service"
import { Organization } from "../app.models";
@Component({
  selector: 'app-organization-create',
  templateUrl: './organization-create.component.html',
  styleUrls: ['./organization-create.component.css']
})
export class OrganizationCreateComponent implements OnInit {
  private name: string;
  private address: string;
  constructor(private organizationService : OrganizationService) { }

  ngOnInit() {
  }

  createOrganization(name, address){

    console.log('name ' + name.val());
    console.log('name ' + address.val());
    this.organizationService.createOrganization(name, address).subscribe(
      success=>{
        alert('org created');
      },
      err=>{
        alert("org failed");
      }
    )
  }

}
