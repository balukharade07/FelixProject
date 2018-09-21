import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRouteModule } from './home-route.module';
import { ProductComponent } from './product/product.component';

import { Product1Component } from './product1/product1.component';
import { MatInputModule,MatButtonModule,MatTableModule,MatProgressBarModule } from '@angular/material';
import { FooterModule } from '../footer/footer.module';

@NgModule({
  imports: [
    CommonModule,
    HomeRouteModule,
    MatButtonModule,
    MatTableModule,
    MatInputModule,
    MatProgressBarModule,
    FooterModule
  ],
  exports:[ProductComponent,Product1Component,ProductComponent,MatButtonModule,MatInputModule,MatProgressBarModule],
  declarations: [ProductComponent,Product1Component]
})
export class HomeModule { }
