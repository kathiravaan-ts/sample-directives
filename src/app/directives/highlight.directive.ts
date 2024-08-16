import { Directive, ElementRef, HostListener, input, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective {

  @Input() appHighlight = '';
  constructor(private el: ElementRef) {
    this.el.nativeElement.style.backgroundColor = 'yellow';
  }

  @HostListener('mouseenter') onMouseEnter(){
    this.highlight(this.appHighlight || 'red');
  }

  @HostListener('mouseleave') onMouseLev(){
    this.highlight('yellow');
  }

  private highlight(color: string) : void {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
