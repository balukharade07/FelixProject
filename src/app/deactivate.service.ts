import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
 
import { PaymentComponent } from './payment/payment.component';

@Injectable({
  providedIn: 'root'
})
export class DeactivateService implements CanDeactivate<PaymentComponent> {

  constructor() { }

  canDeactivate(deactivate :PaymentComponent){
    if(deactivate.payment.cardNo > 0)
    {
      return false;
    }
    else
    {
      confirm('Are u Confirm To go page');
      return true;
    }
  }
}


// Login Page

// import { Injectable } from '@angular/core';
// import { CanDeactivate } from '@angular/router';
// import { LoginComponent } from './login/login.component';

// @Injectable({
//   providedIn: 'root'
// })
// export class DeactivateService implements CanDeactivate<LoginComponent> {

//   constructor() { }

//   canDeactivate(deactivate :LoginComponent){
//     if(deactivate.login.name === deactivate.login1.name && deactivate.login.password === deactivate.login1.password)
//     {
//       return true;
//     }
//     else
//     {
//       alert('Please Login')
//       return false;
//     }
// }
// }
