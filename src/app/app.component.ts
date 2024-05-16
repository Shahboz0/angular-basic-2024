import {Component, OnInit} from '@angular/core';
import {HttpService} from "./http.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-basic';

  dataInComp: any
  constructor(private _httpService: HttpService) {
  }



  onClick(): void {
    this.dataInComp = this._httpService.datas
  }
}
