import { Component, OnInit } from '@angular/core';
import { CartcountService } from '../../cartcount.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private _cart: CartcountService) { 
    this.statu1 = this._cart.statu2;
    this.productImg1 = this._cart.productImg;
    
  }

  inventriy = [];

  cart1 = [];
  totalPrize = 0;
  checkout = false;
 
  nextLibAvailable = true;
  productImg1 = [{
    
  }]

  ngOnInit() {
    this.inventriy = this._cart.getInventory();
   
  }
 

 

 

  incres(index){
  
    this.inventriy[index].quantity++;
    this.inventriy[index].deincre1 = false;
     
  }
  deincres(index){
    if(this.inventriy[index].quantity== 0){
        this.inventriy[index].deincre1 = true;
      
    } else if(this.inventriy[index].quantity>0){
        this.inventriy[index].quantity--;
       this.inventriy[index].deincre1 = false;
    }
   
   
  }
  cart(index){
    
  
    if(this.inventriy[index].status == "Add from Cart")
    {
     
        this.inventriy[index].bgcolor='#f44336';
        this.inventriy[index].status = "Remove Cart";
        this.updateTotalPrize();
        this.updateQuantity();
      
     } else
    {
      
      this.inventriy[index].bgcolor='#3f51b5';
      this.inventriy[index].status = "Add from Cart";
      this.inventriy[index].quantity = 0;
      this.cart1.push(this.inventriy[index]);
      let i = this.cart1.indexOf(this.inventriy[index]);
      this.updateQuantity();
      this.updateTotalPrize();
      
    }
    return index;
  }
  updateTotalPrize(){
    this.totalPrize = 0;
    this.inventriy.forEach(item => {
      this.totalPrize = this.totalPrize + item.price * item.quantity;
       
    });
  }
  totalquantity =0;
 updateQuantity(){
  this.totalquantity = 0;
  this.inventriy.forEach(item => {
   this.totalquantity = this.totalquantity + item.quantity;
  });
  }

 
 
 

  
  // counter2 = 0;
  // incres2(){
  //   this.counter2 = this.counter2+1;
  // }
  // deincres2(){
  //   this.counter2--;
  // }

  // counter3 = 0;
  // incres3(){
  //   this.counter3 = this.counter3+1;
  // }
  // deincres3(){
  //   this.counter3--;
  // }

  
  statu1 = [{
    // status :"Add to Cart",
    // bgcolor:' #3f51b5',
    // cartcount : '0',
  }];


  // cart function
  
  


 

}
