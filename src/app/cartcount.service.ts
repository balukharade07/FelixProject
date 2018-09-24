import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartcountService {

  constructor() { }

productImg = [{
  img  : './assets/img/product1.jpeg',
  girl : './assets/img/girl_dress.jpeg',
  boys : './assets/img/boys_dress.jpeg',
}]

  

  statu2 = [{
    status :"Add to Cart",
    bgcolor:' #3f51b5',
    cartcount : '0',
  }];

  counter1 :number = 0;


  


}
