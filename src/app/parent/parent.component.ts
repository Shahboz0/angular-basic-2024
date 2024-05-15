import {
  AfterContentChecked,
  AfterContentInit, AfterViewChecked, AfterViewInit,
  Component,
  DoCheck, ElementRef,
  OnChanges, OnDestroy,
  OnInit,
  SimpleChanges, ViewChild
} from '@angular/core';
import {ChildComponent} from "../child/child.component";

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [
    ChildComponent
  ],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {
  parentCounter = 0;

  @ViewChild(ChildComponent)
  childComp: ChildComponent | undefined

  increment():void {
    this.childComp?.increment()
  }

  decrement(): void {
    this.childComp?.decrement()
  }

  onEventFromChild(event: number): void {
    console.log(`counter from child ${event}`)
  }
}
