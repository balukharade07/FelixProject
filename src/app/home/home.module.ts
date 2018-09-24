import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRouteModule } from './home-route.module';
import { ProductComponent } from './product/product.component';

import { Product1Component } from './product1/product1.component';
import { MatInputModule,MatButtonModule,MatTableModule,MatProgressBarModule } from '@angular/material';
import { FooterModule } from '../footer/footer.module';
import { Product2Component } from './product2/product2.component';
import { FormsModule } from '@angular/forms';
import { Product3Component } from './product3/product3.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HomeRouteModule,
    MatButtonModule,
    MatTableModule,
    MatInputModule,
    MatProgressBarModule,
    FooterModule,
    
  ],
  exports:[ProductComponent,Product1Component,Product2Component,Product3Component,MatButtonModule,MatInputModule,MatProgressBarModule],
  declarations: [ProductComponent,Product1Component,Product2Component,Product3Component]
})
export class HomeModule { }
