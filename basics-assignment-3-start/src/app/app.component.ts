import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  displayDetails: boolean = false;
  logs = [];

  onDisplayDetails() {
    this.logs.push(Date());
    this.displayDetails = !this.displayDetails;
  }
}
