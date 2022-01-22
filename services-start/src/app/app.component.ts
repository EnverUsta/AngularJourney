import { Component, OnInit } from '@angular/core';
import { AccountsService } from './accounts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  accounts: { name: string; status: string }[] = [];

  constructor(private accountService: AccountsService) {}

  ngOnInit(): void {
    // Since array is a reference type object in javascript,
    // this accounts array is the exact same array with in the account service class
    this.accounts = this.accountService.accounts;
  }
}
