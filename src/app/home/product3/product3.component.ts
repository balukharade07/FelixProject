import { Component, OnInit } from '@angular/core';
import { CartcountService } from '../../cartcount.service';

@Component({
  selector: 'app-product3',
  templateUrl: './product3.component.html',
  styleUrls: ['./product3.component.css']
})
export class Product3Component implements OnInit {

  constructor(private _cart: CartcountService) { 
    
    this.productImg1 = this._cart.productImg;
    
  }

  productImg1 = [{
    
  }]

  ngOnInit() {
  }

}
