import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { Product1Component } from './product1/product1.component';

const routes: Routes = [
  
  { 
    path: '', 
    component: ProductComponent,
    pathMatch:'full'
  },
  { 
    path: 'product1', 
    component: Product1Component 
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
