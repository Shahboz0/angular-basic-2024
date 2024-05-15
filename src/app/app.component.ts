import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ParentComponent} from "./parent/parent.component";
import {DecimalPipe, JsonPipe, LowerCasePipe, NgIf} from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ParentComponent, NgIf, JsonPipe, LowerCasePipe, DecimalPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-basic';
  destroyComp = true


  user = {
    id: 0,
    name: 'User1'
  }
}
