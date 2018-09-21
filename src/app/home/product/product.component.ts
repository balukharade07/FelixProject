import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }
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

  ngOnInit() {
  }

}
