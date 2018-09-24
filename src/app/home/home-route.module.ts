import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { Product1Component } from './product1/product1.component';
import { Product2Component } from './product2/product2.component';
import { Product3Component } from './product3/product3.component';

const routes: Routes = [
  
  { 
    path: '', 
    component: ProductComponent,
    pathMatch:'full'
  },
  { 
    path: 'product1', 
    component: Product1Component 
  },
  { 
    path: 'product2', 
    component: Product2Component 
  },
  { 
    path: 'product3', 
    component: Product3Component 
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule],
  declarations: []
})
export class HomeRouteModule { }
