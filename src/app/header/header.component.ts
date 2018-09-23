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

  statu1 = [{
    
  }];
 
  ngOnInit() {
    this.statu1 = this._cart1.statu2;
  }

  toggale(){
    this.show = !this.show;
  }
  // statu1 = [{
  //   edited : true,
    
    
  // }];
 
  

  // notifications(add){
   

  //     if(add.edited == true)
  //     {
  //       alert('working');
  //       add.edited = false;
  //     }
  //      else
  //     {
  //       add.edited = true;
  //       alert('mouse out working');
  //     }
  //     return add;
    

  // }


}
