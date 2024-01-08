import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { Routes, RouterModule } from "@angular/router";

import { ComponentsComponent } from "./components/components.component";
import { ProfileComponent } from "./examples/profile/profile.component";
import { SignupComponent } from "./examples/signup/signup.component";
import { LandingComponent } from "./examples/landing/landing.component";
import { NucleoiconsComponent } from "./components/nucleoicons/nucleoicons.component";
import { LoginComponent } from "./examples/login/login.component";
import { DetailComponent } from "./examples/detail/detail.component";
import { LoginAuthGuard } from "./auth/login-auth.guard";
import { AuthGuard } from "./auth/auth.guard";

const routes: Routes = [
  {
    path: "",
    redirectTo: "landing",
    component: LandingComponent,
    canActivate: [LoginAuthGuard],
    pathMatch: "full",
  },
  { path: "home", canActivate: [AuthGuard], component: ComponentsComponent },
  {
    path: "user-profile",
    canActivate: [AuthGuard],
    component: ProfileComponent,
  },
  { path: "signup", canActivate: [LoginAuthGuard], component: SignupComponent },
  {
    path: "landing",
    canActivate: [LoginAuthGuard],
    component: LandingComponent,
  },
  {
    path: "nucleoicons",
    canActivate: [AuthGuard],
    component: NucleoiconsComponent,
  },
  { path: "login", canActivate: [LoginAuthGuard], component: LoginComponent },
  { path: "detail", canActivate: [AuthGuard], component: DetailComponent },
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
      useHash: true,
    }),
  ],
  exports: [],
})
export class AppRoutingModule {}
