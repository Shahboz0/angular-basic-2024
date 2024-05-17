import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTableModule} from "@angular/material/table";
import {MatBadgeModule} from "@angular/material/badge";



@NgModule({
  declarations: [],
  imports: [
    MatTableModule,
    MatBadgeModule,
    CommonModule
  ],
  exports: [MatTableModule, MatBadgeModule]
})
export class MaterialModule { }
