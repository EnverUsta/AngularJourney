import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
import { Subscription } from "rxjs";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.css"],
})
export class UserComponent implements OnInit, OnDestroy {
  user: { id: number; name: string };
  paramsSubscription: Subscription;

  constructor(private route: ActivatedRoute) {}

  ngOnDestroy(): void {
    // It is not necessary here but when we create our own subscribe methods, it will be needed
    this.paramsSubscription.unsubscribe();
  }

  ngOnInit() {
    this.paramsSubscription = this.route.params.subscribe((value: Params) => {
      this.user = {
        id: this.route.snapshot.params["id"],
        name: this.route.snapshot.params["name"],
      };
      this.user.id = value.id;
      this.user.name = value.name;
      // this.user = {
      //   id: value.id,
      //   name: value.name
      // };
    });
  }
}
