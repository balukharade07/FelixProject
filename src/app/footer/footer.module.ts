import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Footer1Component } from './footer1/footer1.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [Footer1Component],
  exports:[Footer1Component]
})
export class FooterModule { }
