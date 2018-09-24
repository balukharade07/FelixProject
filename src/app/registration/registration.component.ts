import { Component, OnInit,Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
 
  constructor(public dialogRef: MatDialogRef<RegistrationComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any ) { }
    abc : '';
    onNoClick() {
      this.dialogRef.close();
      alert('WelCome to Felix Shopping Mall \nPlease Login and password Credentials');
  
      if(this.abc.length>0)
      {
          alert("Please fill up the froms");
      }
      else
      {
        this.dialogRef.close();
        alert('WelCome to Felix Shopping Mall \nPlease Login and password Credentials');
    
      }
     
        
      }
    
    
  favorite: string;
  gender: string[] = ['Male', 'Female'];



  ngOnInit() {
  }

}
