import { Directive, HostListener,ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @HostListener('mouseenter') onMouseEnter =(event:MouseEvent)=>{
    this.elementRef.nativeElement.style.backgroundColor ='aliceblue'
  }

  @HostListener('mouseleave') onMouseLeave = (event: MouseEvent) =>{
    this.elementRef.nativeElement.style.backgroundColor ='';

  }

  constructor( private elementRef:ElementRef) { }

}
