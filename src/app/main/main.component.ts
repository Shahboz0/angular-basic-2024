import { Component } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, NgIf],
  template: `
    <main class="main">
      <button (click)="onClick()">Hide text</button>
      <input type="text" [(ngModel)]="title">
      <h1 *ngIf="show">{{ title }}</h1>
    </main>
  `,
  styles: [`
    main {
      width: 100vw;
      height: 100vh;
    }
  `]
})
export class MainComponent {
  show = true;
  title: string = '';

  onClick(): void {
    this.show = !this.show
  }
}
