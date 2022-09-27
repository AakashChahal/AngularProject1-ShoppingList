import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appDropdown]',
})
export class DropdownDirective {
  constructor(private renderer: Renderer2, private elRef: ElementRef) {}
  @HostBinding('class.show') isOpen = false;
  @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
    if (this.elRef.nativeElement == event.target) {
      const currEl = this.elRef.nativeElement.nextElementSibling;
      if (!this.isOpen) this.renderer.addClass(currEl, 'show');
      else this.renderer.removeClass(currEl, 'show');
      this.isOpen = !this.isOpen;
    } else {
      this.renderer.removeClass(
        this.elRef.nativeElement.nextElementSibling,
        'show'
      );
      this.isOpen = false;
    }
  }
}
