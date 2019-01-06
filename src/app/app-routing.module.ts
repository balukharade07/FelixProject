import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { PaymentComponent } from './payment/payment.component';
import { ConfirmComponent } from './confirm/confirm.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { DeactivateService } from './deactivate.service';



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
    path:'product/:id',
    component:ProductDetailsComponent
  },
  {
    path:'cart',
    component:CartComponent
  },
  {
    path:'paymentmode',
    component:PaymentComponent,
    canDeactivate:[DeactivateService]
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
