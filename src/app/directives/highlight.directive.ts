import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
   @Input() in ='yellow';
   @Input() out='red';

  @HostBinding('style.backgroundColor') bcg =this.out;
  constructor() { }
  @HostListener('mouseenter') onMouseEnter(){
    this.bcg=this.in;
  }
  @HostListener('mouseleave') onMouseLeave(){
    this.bcg=this.out;
  }

}
