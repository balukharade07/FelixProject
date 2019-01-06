import { Component, OnInit, Input } from '@angular/core';
import { CartcountService } from '../cartcount.service';
declare var $: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private _cart1: CartcountService) { }
  title = "Felix Project";
  values : number = 0;
  show = false;

  @Input() public user :boolean;
  //@Input() user: string ;

  @Input() public isUserLoggedIn: boolean;


  //statu1 = [{}];
  inventriy = [{}];
  totalquantity =0;
  
  ngOnInit() {
    this.inventriy = this._cart1.getInventory();
  //this.statu1 = this._cart1.statu2;


  $(document).ready(function(){

    $(".menu-icon").click(function(){
      alert('hiii');
      $(".menu-hide").show('10000');
    });

   
  });

  }

  toggleTitle(){
   
   
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
