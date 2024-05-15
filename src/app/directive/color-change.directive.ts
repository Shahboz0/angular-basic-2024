import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appColorChange]',
  standalone: true
})
export class ColorChangeDirective {

  @HostBinding('style.color')
  color = 'black'

  @HostListener('mouseenter')
  onMouseEnter() {
    this.color = 'red'
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.color = 'black'
  }

}
