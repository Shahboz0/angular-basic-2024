import {
  AfterContentChecked,
  AfterContentInit, AfterViewChecked, AfterViewInit,
  Component,
  DoCheck, ElementRef,
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
export class ParentComponent implements OnInit, AfterViewInit, OnDestroy {

  constructor(private elRef: ElementRef){
    console.log("constructor")
    console.log(this.elRef.nativeElement.querySelector('p'))
  }

  ngOnInit(): void {
    console.log('on init')
    console.log(this.elRef.nativeElement.querySelector('p'))
  }

  ngAfterViewInit(): void {
    console.log('view init')
    console.log(this.elRef.nativeElement.querySelector('p'))
  }

  ngOnDestroy(): void {
    console.log('destroy')
  }


}
