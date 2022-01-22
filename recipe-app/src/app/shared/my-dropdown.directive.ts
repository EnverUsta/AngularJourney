import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appMyDropdown]',
})
export class MyDropdownDirective implements OnInit {
  private isOpen: boolean = false;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {}

  @HostListener('click') onClick() {
    if (!this.isOpen) {
      this.renderer.addClass(this.elementRef.nativeElement, 'open');
    } else {
      this.renderer.removeClass(this.elementRef.nativeElement, 'open');
    }
    this.isOpen = !this.isOpen;
  }
}
