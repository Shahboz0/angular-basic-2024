import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [],
  template: `
    <main class="main">
      <input type="text" [value]="title" (input)="onInput($event)">
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

  onInput(event: Event): void {
    const eventTarget = event.target as HTMLElement
    // @ts-ignore
    this.title = event.target.value
    console.log(event)
  }
}
