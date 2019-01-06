import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  constructor(private router: Router) { }
  img = './assets/img/accepted_c22e0.png';
  ngForm = '';

   payment={
    cardNo : 0,
    mmdd : 0,
    vc :0,
};
  buttonStatus = true;
  
  onSubmit(){
    if(this.payment.cardNo == 0  || this.payment.mmdd ==0 || this.payment.vc == 0)
      {
         alert("Please correct all fields");
         return false;
        
      }
      else{
        alert("Payment sucefully");
        this.router.navigate(['./confirm']);
       
      }
  }
 

  ngOnInit() {
  }

}
