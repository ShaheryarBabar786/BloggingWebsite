import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { ServicesServices } from "app/services/services.services";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.scss"],
})
export class SignupComponent implements OnInit {
  constructor(private router: Router, private service: ServicesServices) {}

  ngOnInit() {}
  load = false;
  isButtonDisabled = false;
  selectedGender: string = "";
  selectedNumber: string = "";

  Signup(myForm: NgForm) {
    this.isButtonDisabled = true;
    console.log(myForm);
    this.load = true;
    const userData = {
      ...myForm.value,
      gender: this.selectedGender,
      phone: this.selectedNumber,
    };
    this.service.signUp(myForm).subscribe((res) => {
      this.load = false;

      if (res.status == 1) {
        localStorage.setItem("user", JSON.stringify(res.data));
        localStorage.setItem("token", JSON.stringify(res.jwtToken));
        alert("Signup successfully!");
        this.router.navigate(["/home"]);
      } else {
        alert("Email already exists!");
        this.router.routeReuseStrategy.shouldReuseRoute = () => false;
        this.router.onSameUrlNavigation = "reload";
        this.router.navigate([this.router.url]);
      }
      this.isButtonDisabled = false;
    });
  }
  navigateToLogin() {
    this.router.navigate(["/login"]); // Navigate to the '/login' route
  }
}
