import {Component, OnInit} from '@angular/core';
import {HttpService, Idata} from "./http.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-basic';

  dataInComp: Idata | undefined
  constructor(private _httpService: HttpService) {
  }



  onClick(): void {
    this._httpService.getDataFromFakeBack().subscribe((value) => this.dataInComp = value)
  }
}
