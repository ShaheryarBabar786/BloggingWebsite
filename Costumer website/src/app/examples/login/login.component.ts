import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { ServicesServices } from "app/services/services.services";
// import { ToastrService } from "ngx-toastr";

@Component({
  selector: "login-cmp",
  moduleId: module.id,
  templateUrl: "login.component.html",
})
export class LoginComponent implements OnInit {
  ngOnInit() {}
  constructor(
    private router: Router,
    private service: ServicesServices // private toastr: ToastrService
  ) {}

  // isButtonDisabled = false;

  login(myForm: NgForm) {
    // this.isButtonDisabled = true;

    this.service.login(myForm).subscribe((res) => {
      console.log("server response:", res);

      if (res.status == 1) {
        localStorage.setItem("user", JSON.stringify(res.data));
        localStorage.setItem("token", JSON.stringify(res.jwtToken));
        alert("Login successfully!");
        this.router.navigate(["/home"]);
      } else {
        alert("Email or password is not correct !");
        this.router.routeReuseStrategy.shouldReuseRoute = () => false;
        this.router.onSameUrlNavigation = "reload";
        this.router.navigate([this.router.url]);
      }
      // this.isButtonDisabled = false;
    });
  }
  navigateToSignUp() {
    this.router.navigate(["/signup"]); // Navigate to /signup route
  }
}
