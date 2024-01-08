import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { AdminLayoutRoutes } from "./admin-layout.routing";
import { DashboardComponent } from "../../pages/dashboard/dashboard.component";
import { UsersComponent } from "../../pages/users/users.component";
import { BlogComponent } from "../../pages/blog/blog.component";
import { CategoryComponent } from "../../pages/category/category.component";
import { CommentComponent } from "../../pages/comment/comment.component";
import { SignupComponent } from "../../pages/signup/signup.component";
import { LoginComponent } from "../../pages/login/login.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { ProfileComponent } from "app/pages/profile/profile.component";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    NgbModule,
  ],
  declarations: [
    DashboardComponent,
    UsersComponent,
    BlogComponent,
    CategoryComponent,
    CommentComponent,
    SignupComponent,
    LoginComponent,
    ProfileComponent,
  ],
})
export class AdminLayoutModule {}
