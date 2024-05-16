import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ParentComponent} from "./parent/parent.component";
import {AsyncPipe, DecimalPipe, JsonPipe, LowerCasePipe, NgIf} from "@angular/common";
import {interval, map, Observable, Subscription} from "rxjs";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ParentComponent, NgIf, JsonPipe, LowerCasePipe, DecimalPipe, AsyncPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-basic';

  subscription: Subscription = new Subscription()

  interval$ = new Observable<number>()

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

    this.interval$ = interval(1000).pipe(map((x) => x * x) )

    this.subscription.add(this.interval$.subscribe((value) => console.log('interval ', value)))
  }
}
