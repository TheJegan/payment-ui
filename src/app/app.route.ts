// import { AuthGuardService } from './auth-guard.service';
import {
  RouterModule,
  Routes
} from '@angular/router';
import { PaymentCreateComponent } from './payment-create/payment-create.component';
import { PaymentDetailComponent } from './payment-detail/payment-detail.component';
import { OrganizationCreateComponent } from './organization-create/organization-create.component';
import { OrganizationDetailComponent } from './organization-detail/organization-detail.component';

export const routes: Routes = [
  { path: 'organization', component: OrganizationCreateComponent },
  { path: 'organization/:id', component: OrganizationDetailComponent },
  { path: 'payment', component: PaymentCreateComponent },
  { path: 'payment/:id', component: PaymentDetailComponent },
];