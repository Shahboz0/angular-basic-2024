import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

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

  ngOnInit(): void {
    console.log(`in child on init ${this.counter}`)
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(`in child ${this.counter}`)
  }

}
