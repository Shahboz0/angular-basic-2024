import {
  AfterContentChecked,
  AfterContentInit, AfterViewChecked, AfterViewInit,
  Component,
  DoCheck,
  OnChanges, OnDestroy,
  OnInit,
  SimpleChanges
} from '@angular/core';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent implements OnChanges, OnInit, DoCheck,
  AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  constructor(){
    console.log("constructor")
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('on changes')
  }

  ngOnInit(): void {
    console.log('on init')
  }
  ngDoCheck(): void {
    console.log('do check')
  }

  ngAfterContentInit(): void {
    console.log('content init')
  }
  ngAfterContentChecked(): void {
    console.log('content checked')
  }


  ngAfterViewInit(): void {
    console.log('view init')
  }

  ngAfterViewChecked(): void {
    console.log('view checked')
  }

  ngOnDestroy(): void {
    console.log('destroy')
  }


}
