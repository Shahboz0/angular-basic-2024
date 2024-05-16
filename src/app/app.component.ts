import {Component, OnInit} from '@angular/core';
import {HttpService} from "./http.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'angular-basic';

  dataInComp: any
  constructor(private _httpService: HttpService) {
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.dataInComp = this._httpService.datas
    }, 3000)
  }


}
