import {Component, OnInit} from '@angular/core';
import {HttpService, Idata} from "./http.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-basic';

  form: FormGroup

  dataInComp: Idata | undefined
  constructor(private _httpService: HttpService) {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', [Validators.required, Validators.minLength(4)])
    })
  }



  onClick(): void {
    this._httpService.getDataFromFakeBack().subscribe((value) => this.dataInComp = value)
  }

  submit(): void {
    if (this.form.valid) {
      console.log('form', this.form)
    }
  }
}
