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
import { PaymentListComponent } from './payment-list/payment-list.component'

export const routes: Routes = [
   { path: '', redirectTo: 'organization/list', pathMatch: 'full' },
  { path: 'organization/create', component: OrganizationCreateComponent },
  { path: 'organization/list', component: OrganizationListComponent },
  { path: 'organization/:id', component: OrganizationDetailComponent },
  { path: 'organization/:orgId/payment-create', component: PaymentCreateComponent },
  { path: 'organization/:orgId/payment-list', component: PaymentListComponent },
  { path: 'payment/:id', component: PaymentDetailComponent },
];