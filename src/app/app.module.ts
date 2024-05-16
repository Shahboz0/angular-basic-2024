import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AppComponent} from "./app.component";
import {HttpClientModule} from "@angular/common/http";
import {BrowserModule} from "@angular/platform-browser";
import {RouterModule} from "@angular/router";
import {ParentComponent} from "./parent/parent.component";
import {ChildComponent} from "./child/child.component";
import {ColorChangeDirective} from "./directive/color-change.directive";



@NgModule({
  declarations: [AppComponent, ParentComponent, ChildComponent, ColorChangeDirective],
  imports: [
    CommonModule,
    HttpClientModule,
    BrowserModule,
    RouterModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
