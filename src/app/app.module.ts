import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AppComponent} from "./app.component";
import {HttpClientModule} from "@angular/common/http";
import {BrowserModule} from "@angular/platform-browser";
import {RouterModule} from "@angular/router";
import {ParentComponent} from "./parent/parent.component";
import {ChildComponent} from "./child/child.component";
import {ColorChangeDirective} from "./directive/color-change.directive";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CommunicationService} from "./communication.service";
import {HomeComponent} from "./home/home.component";
import {AboutComponent} from "./about/about.component";
import {GiftComponent} from "./gif/gift.component";
import {AppRoutingModule} from "./app-routing.module";
import {ErrorPageComponent} from "./error-page/error-page.component";
import {GuardComponent} from "./guard/guard.component";
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatTableModule} from "@angular/material/table";
import {TableComponent} from "./table/table.component";
import {NgxEchartsModule} from "ngx-echarts";
import {ChartsComponent} from "./charts/charts.component";
import {MaterialModule} from "./material.module";


@NgModule({
  declarations: [AppComponent, ParentComponent, ChildComponent, ColorChangeDirective,
    HomeComponent, AboutComponent, GiftComponent, ErrorPageComponent,
    GuardComponent, TableComponent, ChartsComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts')
    }),
    MaterialModule
  ],
  bootstrap: [AppComponent],
  providers: [CommunicationService, provideAnimationsAsync()]
})
export class AppModule {
}
