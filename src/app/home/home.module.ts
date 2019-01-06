import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRouteModule } from './home-route.module';
import { ProductComponent } from './product/product.component';

import { MatInputModule,MatButtonModule,MatTableModule,MatProgressBarModule,MatTooltipModule } from '@angular/material';
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
    MatTooltipModule
    
  ],
  exports:[ProductComponent,MatButtonModule,MatInputModule,MatProgressBarModule,MatTooltipModule],
  declarations: [ProductComponent]
})
export class HomeModule { }
