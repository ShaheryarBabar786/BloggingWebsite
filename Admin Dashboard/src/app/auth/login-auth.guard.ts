import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from "@angular/router";

import { ServicesServices } from "app/services/services.services";

import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class LoginAuthGuard implements CanActivate {
  constructor(public router: Router, public service: ServicesServices) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const user = localStorage.getItem("user");
    if (user == null) {
      return true;
    }
    return this.router.createUrlTree(["/dashboard"]);
  }
}
