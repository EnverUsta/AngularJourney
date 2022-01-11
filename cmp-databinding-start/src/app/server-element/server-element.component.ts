import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  ContentChild,
  DoCheck,
  ElementRef,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  ViewChild,
  ViewEncapsulation,
} from "@angular/core";

@Component({
  selector: "app-server-element",
  templateUrl: "./server-element.component.html",
  styleUrls: ["./server-element.component.css"],
  encapsulation: ViewEncapsulation.Emulated,
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  @Input("srvElement") element: { type: string; name: string; content: string };
  @Input() name: string;
  @ViewChild('heading', {static: true}) heading: ElementRef;
  @ContentChild('contentParagraph', {static: true}) contentParagraph: ElementRef;

  constructor() {
    console.log('constructor called!');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy called!');
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked called!');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit called!');
    console.log(this.heading.nativeElement.textContent);
    console.log(this.heading.nativeElement);
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked called!');
  }

  ngAfterContentInit(): void {
    console.log('Text content of paragraph: ', (<HTMLParagraphElement>this.contentParagraph.nativeElement).textContent);
    console.log('ngAfterContentInit called!');
  }

  ngDoCheck(): void {
    console.log('ngDoCheck called!');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges called! ', changes);
  }

  ngOnInit(): void {
    console.log('Text content of paragraph: ', (<HTMLParagraphElement>this.contentParagraph.nativeElement).textContent);
    console.log('ngOnInit called!');
  }
}
