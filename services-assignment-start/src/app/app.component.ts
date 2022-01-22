import { Component, OnInit } from '@angular/core';
import { CounterService } from './counter.service';
import { UsersService } from './users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  // activeUsers: string[] = [];
  // inactiveUsers: string[] = [];

  constructor(
    private usersService: UsersService,
    private counterService: CounterService
  ) {}

  ngOnInit(): void {
    // this.activeUsers = this.usersService.activeUsers;
    // this.inactiveUsers = this.usersService.inactiveUsers;
    this.counterService.counterUpdated.subscribe((count: number) => {
      console.log(count);
    });
  }

  // onSetToInactive(id: number) {
  //   this.inactiveUsers.push(this.activeUsers[id]);
  //   this.activeUsers.splice(id, 1);
  // }

  // onSetToActive(id: number) {
  //   this.activeUsers.push(this.inactiveUsers[id]);
  //   this.inactiveUsers.splice(id, 1);
  // }
}
