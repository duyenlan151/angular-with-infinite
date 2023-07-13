import { Directive, ElementRef, Output, EventEmitter, HostListener } from '@angular/core';

@Directive({
  selector: '[appInfiniteScroll]'
})
export class InfiniteScrollDirective {
  @Output() reachedBottom: EventEmitter<any> = new EventEmitter();

  constructor(private elementRef: ElementRef) { }

  @HostListener('scroll', ['$event'])
  onScroll(event: Event): void {
    const element = event.target as HTMLElement;
    const atBottom = element.scrollHeight - element.scrollTop === element.clientHeight;

    if (atBottom) {
      this.reachedBottom.emit();
    }
  }
}