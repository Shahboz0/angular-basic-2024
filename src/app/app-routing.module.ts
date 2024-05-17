import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {GiftComponent} from "./gif/gift.component";
import {ErrorPageComponent} from "./error-page/error-page.component";
import {GuardService} from "./guard.service";

const routes: Routes = [
  {
    path: '', component: HomeComponent,
  },
  {
    path: 'home', component: HomeComponent,
  },
  {
    path: 'about', loadChildren: async () => import('./lazy.module').then(({LazyModule: Module }) => Module)
  },
  {
    path: 'gift', component: GiftComponent, canActivate: [GuardService]
  },
  {
    path: 'error', component: ErrorPageComponent
  },
  {
    path: '**', redirectTo: '/error'
  },
  {
    path: '', redirectTo: '/home', pathMatch: 'full'
  }
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
