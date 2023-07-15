import { Directive, ElementRef, Output, EventEmitter, HostListener } from '@angular/core';

@Directive({
  selector: '[appInfiniteScroll]'
})
export class InfiniteScrollDirective {
  @Output() reachedBottom: EventEmitter<any> = new EventEmitter();

  constructor(private elementRef: ElementRef) { }

  @HostListener('scroll', ['$event.target'])
  onScroll(element: HTMLElement): void {
    const atBottom = this.isAtBottom(element);

    if (atBottom) {
      this.reachedBottom.emit();
    }
  }

  private isAtBottom(element: HTMLElement): boolean {
    const scrollTop = element.scrollTop;
    const scrollHeight = element.scrollHeight;
    const clientHeight = element.clientHeight;

    return scrollTop + clientHeight >= scrollHeight;
  }
}
