import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpModule } from '@angular/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegistrationComponent } from './registration/registration.component';
import { UiMatrialsModule } from './ui-matrial';
import { HeaderComponent } from './header/header.component';
import { CartComponent } from './cart/cart.component';
import { FooterModule } from './footer/footer.module';
import { CartcountService } from './cartcount.service';
import { HttpClientModule } from '@angular/common/http';
import { PaymentComponent } from './payment/payment.component';
import { ConfirmComponent } from './confirm/confirm.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { AuthGuard } from './auth.guard';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    HeaderComponent,
    CartComponent,
    PaymentComponent,
    ConfirmComponent,
    ProductDetailsComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    BrowserAnimationsModule,
    FormsModule,
    UiMatrialsModule,
    FooterModule,
    HttpClientModule
    
  ],
  entryComponents:[RegistrationComponent],
  exports:[FooterModule],
  providers: [CartcountService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
