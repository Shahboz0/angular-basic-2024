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
import {ColorChangeDirective} from "../directive/color-change.directive";
import {CommunicationService} from "../communication.service";

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {
  parentCounter = 0;

  constructor(private _communicateService: CommunicationService) {
  }
  increment():void {
    this._communicateService.sendData(this.parentCounter++)
  }

  decrement(): void {
    this._communicateService.sendData(this.parentCounter--)
  }
}
