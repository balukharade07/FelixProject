import { Component, OnInit } from '@angular/core';
import { CartcountService } from '../cartcount.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private _cart1: CartcountService) { }

  values : number = 0;
  show = false;
  isLoggedIn = true;
  loggedOut = false;


  //statu1 = [{}];
  inventriy = [{}];
  totalquantity =0;
  
  ngOnInit() {
    this.inventriy = this._cart1.getInventory();
  //this.statu1 = this._cart1.statu2;
  }

  toggale(){
    this.show = !this.show;
  }
 info=[
   {
     "h1":'20% offer in T-Shirt...',
     "h2":'5 mins ago'
   },
   {
    "h1":'Buy 1 get 5 offer in Shirt...',
    "h2":'10 mins ago'
  },
  {
    "h1":'Buy 1 get 5 offer in Dresses...',
    "h2":'15 mins ago'
  }
 ] 

}
