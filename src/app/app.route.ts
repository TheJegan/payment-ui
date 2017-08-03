// import { AuthGuardService } from './auth-guard.service';
import {
  RouterModule,
  Routes
} from '@angular/router';
import { PaymentCreateComponent } from './payment-create/payment-create.component';
import { PaymentDetailComponent } from './payment-detail/payment-detail.component';
import { OrganizationCreateComponent } from './organization-create/organization-create.component';
import { OrganizationDetailComponent } from './organization-detail/organization-detail.component';
import { OrganizationListComponent } from './organization-list/organization-list.component';
import { OrganizationSearchComponent } from './organization-search/organization-search.component'
import { PaymentListComponent } from './payment-list/payment-list.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
   { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'organization/create', component: OrganizationCreateComponent },
  { path: 'organization/list', component: OrganizationListComponent },
  { path: 'organization/search', component: OrganizationSearchComponent },
  { path: 'organization/:id', component: OrganizationDetailComponent },
  { path: 'organization/:orgId/payment-create', component: PaymentCreateComponent },
  { path: 'organization/:orgId/payment-list', component: PaymentListComponent },
  { path: 'payment/:id', component: PaymentDetailComponent },
  { path: 'login/:id', component: LoginComponent },
  { path: 'home', component: HomeComponent}
];