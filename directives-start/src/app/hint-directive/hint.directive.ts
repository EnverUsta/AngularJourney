import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appHint]',
})
export class HintDirective implements OnInit {
  @Input() appHint = 'defaultValue';
  @HostBinding('title') title: string;
  @HostBinding('style.color') textColor: string;

  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    console.log(this.elRef);
  }

  @HostListener('mouseover') mouseOver(eventData: Event) {
    // this.title = this.appHint;
    // (<HTMLElement>this.elRef.nativeElement).setAttribute('title', this.appHint);
    this.title = this.appHint;
    this.textColor = 'red';
    this.renderer.destroy();
  }

  @HostListener('mouseleave') mouseLeave(eventData: Event) {
    this.textColor = 'black'
  }
}
