import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent  implements OnInit, OnChanges {

  @Input()
  counter = 0;

  @Output()
  newCounter = new EventEmitter<number>()

  ngOnInit(): void {
    console.log(`in child on init ${this.counter}`)
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.newCounter.emit(this.counter + 1000);
  }

}
