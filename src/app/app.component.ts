import { Component, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  // get local ref for the form element:
  @ViewChild("f", { static: true }) signupForm: NgForm;
  defaultSelectValue = "pet";
  answer: string = "";

  suggestUserName() {
    const suggestedName = "Superuser";
  }

  // onSubmit(form: NgForm) {
  //   console.log("Submitted", form);
  // }
  // alternative approach using @ViewChild to access form instead of passig it in
  onSubmit() {
    // access the form via the view child prop
    console.log(this.signupForm);
  }
}
