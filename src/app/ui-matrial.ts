import { NgModule } from '@angular/core';
import { MatTooltipModule,MatInputModule, MatButtonModule, MatDialogModule, MatRadioModule, MatBadgeModule, MatDatepickerModule } from '@angular/material';

@NgModule({
imports:[
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    MatRadioModule,
    MatBadgeModule,
    MatDatepickerModule,
    MatTooltipModule
    
],
exports:[MatTooltipModule,MatInputModule,MatButtonModule,MatDialogModule,MatRadioModule,MatBadgeModule,MatDatepickerModule],

})
export class UiMatrialsModule { }