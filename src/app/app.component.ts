import {Component, OnInit} from '@angular/core';
import {HttpService, Idata} from "./http.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "./auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-basic';


  dataInComp: Idata | undefined
  constructor(private _httpService: HttpService,
              public authService: AuthService) {
  }



  onClick(): void {
    this._httpService.getDataFromFakeBack().subscribe((value) => this.dataInComp = value)
  }

}
