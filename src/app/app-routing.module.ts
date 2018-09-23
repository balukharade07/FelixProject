import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
// import { HttpModule } from '@angular/http';
// import { BrowserModule } from '@angular/platform-browser';

const routes: Routes = [
  {
    path:'',
    component:LoginComponent,
    pathMatch:'full'
  },
  {
    path:'login',
    component:LoginComponent
  },
  { 
    path: 'home',
    loadChildren: './home/home.module#HomeModule'
  },
  {
    path:'cart',
    component:CartComponent
  },
  {
    path:'**',
    component:LoginComponent
  }
  
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    // CommonModule,
    // FormsModule,
    // HttpModule,
    // BrowserModule
    ],
    exports:[RouterModule],
  declarations: []
})
export class AppRoutingModule { }
