import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MaterialModule} from "./material.module";
import {ChartsComponent} from "./charts/charts.component";
import {RouterModule} from "@angular/router";
import {AboutComponent} from "./about/about.component";
import {NgxEchartsModule} from "ngx-echarts";



@NgModule({
  declarations: [AboutComponent, ChartsComponent],
  imports: [
    MaterialModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts')
    }),
    RouterModule.forChild([
      {
        path: '', component: AboutComponent
      }
    ])
  ]
})
export class LazyModule { }
