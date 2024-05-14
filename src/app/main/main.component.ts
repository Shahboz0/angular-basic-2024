import {Component} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {JsonPipe, NgForOf, NgIf} from "@angular/common";

interface User {
  name: string;
  id: number;
}

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, NgIf, NgForOf, JsonPipe],
  template: `
    <main class="main">
      <div *ngFor="let item of userArr">
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
}
