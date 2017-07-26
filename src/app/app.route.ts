// import { AuthGuardService } from './auth-guard.service';
import {
  RouterModule,
  Routes
} from '@angular/router';
import { PaymentCreateComponent } from './payment-create/payment-create.component';
import { PaymentDetailComponent } from './payment-detail/payment-detail.component'


export const routes: Routes = [
  // { path: '', redirectTo: 'home', pathMatch: 'full' },
  // { path: 'home', component: LoginComponent },
  { path: 'payment/', component: PaymentCreateComponent },
  { path: 'payment/:id', component: PaymentDetailComponent }
];