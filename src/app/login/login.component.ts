import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';
import { RegistrationComponent } from '../registration/registration.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(public dialog: MatDialog) { }

  img = './assets/img/3.jpg';

  openDialog(): void {
    const dialogRef = this.dialog.open(RegistrationComponent, {
         
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
     
    });
  }

}
