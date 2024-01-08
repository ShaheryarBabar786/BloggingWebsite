import { Component, OnInit } from "@angular/core";

export interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}

export const ROUTES: RouteInfo[] = [
  { path: "/dashboard", title: "Dashboard", icon: "nc-bank", class: "" },
  { path: "/user", title: "Users", icon: "nc-single-02", class: "" },
  { path: "/blog", title: "Blogs", icon: "nc-paper", class: "" },
  { path: "/category", title: "Categories", icon: "nc-layout-11", class: "" },
  { path: "/comment", title: "Comments", icon: "nc-chat-33", class: "" },
  { path: "/profile", title: "Profile", icon: "nc-single-02", class: "" },
];

@Component({
  moduleId: module.id,
  selector: "sidebar-cmp",
  templateUrl: "sidebar.component.html",
})
export class SidebarComponent implements OnInit {
  public menuItems: any[];
  ngOnInit() {
    this.menuItems = ROUTES.filter((menuItem) => menuItem);
  }
}
