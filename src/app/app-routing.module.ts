import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { PaymentComponent } from './payment/payment.component';
import { ConfirmComponent } from './confirm/confirm.component';
// import { HttpModule } from '@angular/http';
// import { BrowserModule } from '@angular/platform-browser';

const routes: Routes = [
  {
    path:'',
    component:LoginComponent,
    pathMatch:'full'
  },
  {
    path:'login',
    component:LoginComponent
  },
  { 
    path: 'home',
    loadChildren: './home/home.module#HomeModule'
  },
  {
    path:'cart',
    component:CartComponent
  },
  {
    path:'paymentmode',
    component:PaymentComponent
  },
  {
    path:'confirm',
    component:ConfirmComponent
  },
  {
    path:'**',
    component:LoginComponent
  }
  
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes),

    ],
    exports:[RouterModule],
  declarations: []
})
export class AppRoutingModule { }
