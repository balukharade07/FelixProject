import { NgModule } from '@angular/core';
import { MatInputModule, MatButtonModule, MatDialogModule, MatRadioModule, MatBadgeModule, MatDatepickerModule } from '@angular/material';

@NgModule({
imports:[
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    MatRadioModule,
    MatBadgeModule,
    MatDatepickerModule
    
],
exports:[MatInputModule,MatButtonModule,MatDialogModule,MatRadioModule,MatBadgeModule,MatDatepickerModule],

})
export class UiMatrialsModule { }