import { Component, OnInit } from '@angular/core';
import { CartcountService } from '../../cartcount.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private _cart: CartcountService) { }

 

  ngOnInit() {
   this.statu1 = this._cart.statu2;
   
  }




  img = './assets/img/product1.jpeg';
  girl = './assets/img/girl_dress.jpeg';
  boys = './assets/img/boys_dress.jpeg';
 
 

  counter1 = 0;
  incres(){
    this.counter1 = this.counter1+1;
  }
  deincres(){
    this.counter1--;
  }
  counter2 = 0;
  incres2(){
    this.counter2 = this.counter2+1;
  }
  deincres2(){
    this.counter2--;
  }

  counter3 = 0;
  incres3(){
    this.counter3 = this.counter3+1;
  }
  deincres3(){
    this.counter3--;
  }

  
  statu1 = [{
    // status :"Add to Cart",
    // bgcolor:' #3f51b5',
    // cartcount : '0',
  }];


  // cart function
  
  cart(add){
    
    
    if(add.status == "Add to Cart")
    {
      add.status = "Remove cart";
      add.bgcolor='#f44336';
      add.cartcount = '';
      add.cartcount = add.cartcount+1;
      alert('Add to Cart Successfully');
     } else
    {
      add.status = "Add to Cart";
      add.bgcolor=' #3f51b5';
      add.cartcount--;
      alert('Remove to Cart');
    }
    return add;
  }


 

}
