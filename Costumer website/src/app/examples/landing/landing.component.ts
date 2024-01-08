import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-landing",
  templateUrl: "./landing.component.html",
  styleUrls: ["./landing.component.scss"],
})
export class LandingComponent implements OnInit {
  focus: any;
  focus1: any;

  constructor(private router: Router) {}

  ngOnInit() {}
  goToSignUp() {
    this.router.navigate(["/signup"]); // Navigate to the '/signup' route
  }
}
