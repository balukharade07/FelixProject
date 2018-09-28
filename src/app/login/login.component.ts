import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';
import { RegistrationComponent } from '../registration/registration.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(public dialog: MatDialog,private router: Router) { }

  img = './assets/img/3.jpg';

  openDialog(): void {
    const dialogRef = this.dialog.open(RegistrationComponent, {
         
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
     
    });
  }


x ;
y;


  login(){
   
      this.x = document.getElementById("user").value;
      this.y = document.getElementById("pass").value;

    if(this.x == ""){
      alert('Please Enter Your User_Name');
      document.getElementById("user").innerHTML = 'red';
      return false;
    } 
   else if(this.y == ""){
      alert('Please Enter Your Password');
      return false;
    } 
     
    else{
      alert("Successfully login");
      this.router.navigate(['./home']);
      return true;
    }
   
  }

}
