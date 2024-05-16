import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ParentComponent} from "./parent/parent.component";
import {AsyncPipe, DecimalPipe, JsonPipe, LowerCasePipe, NgIf} from "@angular/common";
import {interval, map, Observable, Subscription} from "rxjs";
import {HttpClient, HttpClientModule} from "@angular/common/http";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ParentComponent, NgIf, JsonPipe, LowerCasePipe, DecimalPipe, AsyncPipe, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-basic';

  subscription: Subscription = new Subscription()

  interval$ = new Observable<number>()

  constructor(private httpClient: HttpClient) {

    this.httpClient.get('https://jsonplaceholder.typicode.com/todos/').subscribe((value) => console.log(value))
  }
}
