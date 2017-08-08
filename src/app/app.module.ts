import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PaymentCreateComponent } from './payment-create/payment-create.component';
import { routes } from './app.route'
import { RouterModule } from '@angular/router';
import { PaymentDetailComponent } from './payment-detail/payment-detail.component';
import { PaymentService } from './payment.service';
import { OrganizationCreateComponent } from './organization-create/organization-create.component';
import { OrganizationDetailComponent } from './organization-detail/organization-detail.component';
import { OrganizationService } from './organization.service';
import { UserService } from './user.service';
import { OrganizationListComponent } from './organization-list/organization-list.component';
import { AppNavigationComponent } from './app-navigation/app-navigation.component';
import { PaymentListComponent } from './payment-list/payment-list.component';
import { LoginComponent } from './login/login.component';
import { LoginService } from './login.service';
import { AuthenticationService } from './authentication.service';
import { SignupComponent } from './signup/signup.component';
import { OrganizationSearchComponent } from './organization-search/organization-search.component';
import { HomeComponent } from './home/home.component';
import { OrderByPipe } from './orderby';
import { ApartmentCreateComponent } from './apartment-create/apartment-create.component';
import { ApartmentDetailComponent } from './apartment-detail/apartment-detail.component';
import { ApartmentEditComponent } from './apartment-edit/apartment-edit.component';
import { ApartmentDeleteComponent } from './apartment-delete/apartment-delete.component';

@NgModule({
  declarations: [
    AppComponent,
    PaymentCreateComponent,
    PaymentDetailComponent,
    OrganizationCreateComponent,
    OrganizationDetailComponent,
    OrganizationListComponent,
    AppNavigationComponent,
    PaymentListComponent,
    LoginComponent,
    SignupComponent,
    OrganizationSearchComponent,
    HomeComponent,
    OrderByPipe,
    ApartmentCreateComponent,
    ApartmentDetailComponent,
    ApartmentEditComponent,
    ApartmentDeleteComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [PaymentService, UserService, OrganizationService, AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
