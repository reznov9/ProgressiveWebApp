import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatSidenavModule, MatToolbarModule, MatIconModule, MatListModule, MatCardModule, MatButtonModule, MatTableModule, MatInputModule, MatSelect, MatSelectModule} from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatTableModule,
    MatInputModule,
    MatSelectModule
  ],
  exports:[
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatTableModule,
    MatInputModule,
    MatSelectModule
  ]
})
export class MaterialModule { }
