import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';
import { RegistrationComponent } from '../registration/registration.component';
import { Router } from '@angular/router';
import { CartComponent } from '../cart/cart.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(public dialog: MatDialog,private router: Router,) { }

  img = './assets/img/3.jpg';

  openDialog(): void {
    const dialogRef = this.dialog.open(RegistrationComponent, {
         
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
     
    });
  }

  login={
    name : '',
    password : ''
  };
  login1={
    name : 'balu',
    password : 'balu'
  };
   
  onSubmit(){
      if(this.login.name === this.login1.name && this.login.password === this.login1.password)
      {
        alert("Login sucefully");
        this.router.navigate(['./home']);
      }
      else{
        alert("please Login");

      }
  }

}
