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
  genders = ["male", "female"];
  user = {
    username: "",
    email: "",
    secretQuestion: "",
    questionAnswer: "",
    gender: ""
  };

  submitted = false;

  suggestUserName() {
    const suggestedName = "Superuser";

    this.signupForm.form.patchValue({
      userData: {
        username: suggestedName
      }
    });
  }

  onSubmit() {
    this.submitted = true;

    const { value } = this.signupForm;

    this.user.username = value.userData.username;
    this.user.email = value.userData.email;
    this.user.secretQuestion = value.secret;
    this.user.questionAnswer = value.questionAnswer;
    this.user.gender = value.gender;

    this.signupForm.reset();
  }
}
