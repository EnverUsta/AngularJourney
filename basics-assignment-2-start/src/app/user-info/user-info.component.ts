import { Component } from "@angular/core";

@Component({
    selector: 'app-user-info',
    templateUrl: './user-info.component.html',
    styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent {
    username: string = '';

    isUserNameEmpty() {
        return this.username.length === 0 ? true : false;
    }

    onReset() {
        this.username = '';
    }
}