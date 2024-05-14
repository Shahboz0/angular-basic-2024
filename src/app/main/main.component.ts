import { Component } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  template: `
    <main class="main">
      <input type="text" [(ngModel)]="title">
      <h1>{{ title }}</h1>
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
  title: string = ''
}
