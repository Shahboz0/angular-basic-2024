import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [],
  template: `
    <main class="main">
      <h1>{{ title }}</h1>
      <input [value]="title">
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
  title: string = 'Main component'
}
