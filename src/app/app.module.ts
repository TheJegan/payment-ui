import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PaymentCreateComponent } from './payment-create/payment-create.component';
import { routes } from './app.route'
import { RouterModule } from '@angular/router';
import { PaymentDetailComponent } from './payment-detail/payment-detail.component';
import { PaymentService } from './payment.service';

@NgModule({
  declarations: [
    AppComponent,
    PaymentCreateComponent,
    PaymentDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [PaymentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
