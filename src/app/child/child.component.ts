import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {CommunicationService} from "../communication.service";

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent implements OnInit {

  counter: number | unknown = 0;

  constructor(private _communication: CommunicationService) {
  }

  ngOnInit(): void {
    this._communication.getData().subscribe((value) => this.counter = value)
  }


}
