import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRouteModule } from './home-route.module';
import { ProductComponent } from './product/product.component';

import { MatInputModule,MatButtonModule,MatTableModule,MatProgressBarModule } from '@angular/material';
import { FooterModule } from '../footer/footer.module';
import { FormsModule } from '@angular/forms';


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
  exports:[ProductComponent,MatButtonModule,MatInputModule,MatProgressBarModule],
  declarations: [ProductComponent]
})
export class HomeModule { }
