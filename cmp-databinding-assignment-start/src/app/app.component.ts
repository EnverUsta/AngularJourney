import { NumberSymbol } from "@angular/common";
import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  numbers: number[] = [];

  onStarted(event: number) {
    this.numbers.push(event);
  }
}
