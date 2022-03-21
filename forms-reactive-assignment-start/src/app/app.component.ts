import { Component, OnInit } from "@angular/core";
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators,
} from "@angular/forms";
import { Observable } from "rxjs/internal/Observable";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  projectForm: FormGroup;

  ngOnInit(): void {
    this.projectForm = new FormGroup({
      projectName: new FormControl(
        null,
        [Validators.required],
        [this.forbiddenProjectNameAsync]
      ),
      email: new FormControl(null, [Validators.required, Validators.email]),
      projectStatus: new FormControl("critical", [Validators.required]),
    });
  }

  onSubmit() {
    console.log(this.projectForm);
    console.table(this.projectForm.value);
    this.projectForm.reset({ projectStatus: "critical" });
  }

  forbiddenProjectName(control: FormControl): ValidationErrors | null {
    if (control.value === "Test" || control.value === "test") {
      return { projectNameIsForbidden: true };
    }
    return null;
  }

  forbiddenProjectNameAsync(
    control: FormControl
  ): Promise<ValidationErrors> | Observable<ValidationErrors> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === "Test" || control.value === "test") {
          resolve({ projectNameIsForbidden: true });
        } else {
          resolve(null);
        }
      }, 1500);
    });
    return promise;
  }
}
