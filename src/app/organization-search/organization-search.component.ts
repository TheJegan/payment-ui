import { Component, OnInit } from '@angular/core';
import { OrganizationService } from '../organization.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-organization-search',
  templateUrl: './organization-search.component.html',
  styleUrls: ['./organization-search.component.css']
})
export class OrganizationSearchComponent implements OnInit {

  constructor(private organizationService: OrganizationService, private router: Router) { }

  ngOnInit() {
  }

  searchByName(name) {
    this.organizationService.getOrganizationByName(name.value)
      .subscribe(organization => {
        if (organization) {
          // this.router.navigate([``])
          this.router.navigate([`/login/${organization._id}`]);
        }
      })
  }
}
