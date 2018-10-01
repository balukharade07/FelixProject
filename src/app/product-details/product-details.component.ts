import { Component, OnInit } from '@angular/core';
import { CartcountService } from '../cartcount.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {


  inventriy = [];
  routeParams = {};
  constructor(private _cart : CartcountService,private route: ActivatedRoute) {
    this.route.params.subscribe( params => this.routeParams = params );
   }

  ngOnInit() {
    this.inventriy = this._cart.getInventory();
  }

}
