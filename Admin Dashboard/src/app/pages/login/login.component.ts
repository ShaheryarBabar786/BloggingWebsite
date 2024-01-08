import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { ServicesServices } from "app/services/services.services";


@Component({
  selector: "login-cmp",
  moduleId: module.id,
  templateUrl: "login.component.html",
})
export class LoginComponent implements OnInit {
  toastr: any;
  ngOnInit() {}
  constructor(
    private router: Router,
    private service: ServicesServices,
    
  ) {}

  isButtonDisabled = false;

  login(myForm: NgForm) {
    this.isButtonDisabled = true;

    this.service.login(myForm).subscribe((res) => {
      console.log("server response:", res);

      if (res.status == 1) {
        localStorage.setItem("user", JSON.stringify(res.data));
        localStorage.setItem("token", JSON.stringify(res.jwtToken));
        this.toastr.success("Login successfully!", "Success");
        this.router.navigate(["/dashboard"]);
      } else {
        this.toastr.error("Email or password is not correct !", "Failed");
        this.router.routeReuseStrategy.shouldReuseRoute = () => false;
        this.router.onSameUrlNavigation = "reload";
        this.router.navigate([this.router.url]);
      }
      this.isButtonDisabled = false;
    });
  }
  navigateToSignUp() {
    this.router.navigate(["/signup"]); // Navigate to /signup route
  }
}
