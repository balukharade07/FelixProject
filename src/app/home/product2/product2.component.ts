import { Component, OnInit } from '@angular/core';
import { CartcountService } from '../../cartcount.service';

@Component({
  selector: 'app-product2',
  templateUrl: './product2.component.html',
  styleUrls: ['./product2.component.css']
})
export class Product2Component implements OnInit {

  constructor(private _cart: CartcountService) { 
    
    this.productImg1 = this._cart.productImg;
    
  }

  productImg1 = [{
    
  }]
  ngOnInit() {
  }

}
