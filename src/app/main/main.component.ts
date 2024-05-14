import {Component} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {JsonPipe, NgForOf, NgIf, NgStyle} from "@angular/common";

interface User {
  name: string;
  id: number;
}

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, NgIf, NgForOf, JsonPipe, NgStyle],
  template: `
    <main class="main">
      <button (click)="onClick()">Change background color</button>
      <div *ngFor="let item of userArr" [ngStyle]="style">
        <h2>{{ item | json }}</h2>
      </div>
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
  style = { 'background': 'white' }
  userArr: Array<User> = [
    {
      name: 'user1',
      id: 0
    },
    {
      name: 'user2',
      id: 1
    },
    {
      name: 'user3',
      id: 2
    },
  ]

  onClick(): void {
    this.style = { 'background': 'yellow' }
  }
}
