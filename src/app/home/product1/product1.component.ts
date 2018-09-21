import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  name: string;
  position: number;
  type: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Model Name', type: "Men"},
  {position: 2, name: 'Leather Type', type: "Napa"},
  {position: 3, name: 'Animal Source', type:"Bovine/Cowhide"},
  {position: 4, name: 'Weight', type: "100 g"},
  {position: 5, name: 'Other Body Features', type: "Bi-Fold, Main Compartments, Coin Pocket With Press Button"}
];

@Component({
  selector: 'app-product1',
  templateUrl: './product1.component.html',
  styleUrls: ['./product1.component.css']
})
export class Product1Component implements OnInit {

  constructor() { }
  img = './assets/img/product1.jpeg';

  displayedColumns: string[] = ['position', 'name', 'type'];
  dataSource = ELEMENT_DATA;
  ngOnInit() {
  }

}
