import { Component, EventEmitter, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-game-control",
  templateUrl: "./game-control.component.html",
  styleUrls: ["./game-control.component.css"],
})
export class GameControlComponent implements OnInit {
  @Output("started") started = new EventEmitter<number>();
  refInterval: NodeJS.Timeout;
  count: number = 1;

  constructor() {}

  ngOnInit(): void {}

  onStart() {
    this.refInterval = setInterval(() => {
      this.started.emit(this.count++);
    }, 1000);
  }

  onStop() {
    if (this.refInterval) {
      clearInterval(this.refInterval);
    }
  }
}
