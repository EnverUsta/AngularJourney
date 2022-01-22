import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CounterService } from '../counter.service';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css'],
})
export class InactiveUsersComponent implements OnInit {
  users: string[];
  // @Output() userSetToActive = new EventEmitter<number>();

  constructor(
    private usersService: UsersService,
    private counterService: CounterService
  ) {}

  ngOnInit(): void {
    this.users = this.usersService.inactiveUsers;
  }

  onSetToActive(id: number) {
    this.usersService.setToActive(id);
    this.counterService.counterUpdated.emit(
      this.counterService.incrementCounter()
    );
    // this.userSetToActive.emit(id);
  }
}
