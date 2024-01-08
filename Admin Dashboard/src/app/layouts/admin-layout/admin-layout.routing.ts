import { Routes } from "@angular/router";

import { DashboardComponent } from "../../pages/dashboard/dashboard.component";
import { UsersComponent } from "../../pages/users/users.component";
import { BlogComponent } from "../../pages/blog/blog.component";
import { CategoryComponent } from "../../pages/category/category.component";
import { CommentComponent } from "../../pages/comment/comment.component";
import { SignupComponent } from "../../pages/signup/signup.component";
import { LoginComponent } from "../../pages/login/login.component";
import { ProfileComponent } from "app/pages/profile/profile.component";

export const AdminLayoutRoutes: Routes = [
  { path: "dashboard", component: DashboardComponent },
  { path: "user", component: UsersComponent },
  { path: "blog", component: BlogComponent },
  { path: "category", component: CategoryComponent },
  { path: "comment", component: CommentComponent },
  { path: "signup", component: SignupComponent },
  { path: "login", component: LoginComponent },
  { path: "profile", component: ProfileComponent },
];
