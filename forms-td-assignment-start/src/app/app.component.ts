import { Component, ViewChild } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @ViewChild('myform', { static: false }) myForm: NgForm;
  userData = {
    email: '',
    password: '',
    subscription: '',
  };
  defaultSubscription = 'Advanced';
  isSubmitted = false;

  onSubmit() {
    this.isSubmitted = true;
    this.userData.email = this.myForm.value.email;
    this.userData.password = this.myForm.value.password;
    this.userData.subscription = this.myForm.value.subscription;
    console.table(this.userData);
    this.myForm.reset();
  }
}
