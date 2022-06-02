import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appKnowledgeSharingHighlight]'
})
export class KnowledgeSharingHighlightDirective {

  constructor(elementRef: ElementRef) {
    elementRef.nativeElement.style.backgroundColor = 'green'
  }
  

}
