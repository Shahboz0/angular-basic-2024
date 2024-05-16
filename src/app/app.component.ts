import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ParentComponent} from "./parent/parent.component";
import {DecimalPipe, JsonPipe, LowerCasePipe, NgIf} from "@angular/common";
import {interval, Observable, Subscription} from "rxjs";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ParentComponent, NgIf, JsonPipe, LowerCasePipe, DecimalPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-basic';

  subscription: Subscription = new Subscription()

  constructor() {
    const observable = new Observable((subscriber) => {
      subscriber.next(1);
      subscriber.next(2);
      subscriber.next(3);
      setTimeout(() => {
        subscriber.next(4);
        subscriber.complete();
      }, 1000);
    });

    observable.subscribe((value) => console.log(value))

    const interval$ = interval(1000)

    this.subscription.add(interval$.subscribe((value) => console.log('interval ', value)))
  }
}
