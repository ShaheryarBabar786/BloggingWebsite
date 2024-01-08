import { Component, OnInit } from "@angular/core";
import { ServicesServices } from "app/services/services.services";
import { environment } from "environments/environment";
import { ToastrService } from "ngx-toastr";

declare interface UsersData {
  headerRow: string[];
  dataRows: string[][];
}

@Component({
  selector: "user-cmp",
  moduleId: module.id,
  templateUrl: "users.component.html",
})
export class UsersComponent implements OnInit {
  url = environment.url;

  users: any;
  updated: boolean;
  userData: any;
  constructor(
    private service: ServicesServices,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.getAllUser();
  }
  getAllUser() {
    this.service.getAllUser().subscribe((res) => {
      console.log(res);
      if (res.status == 1) {
        this.users = res.data;
      }
    });
  }
  //delete user
  id: any;

  deleteuserData(user: any) {
    this.id = user._id;
    let data = {
      status: -1,
    };
    this.service.deleteUser(this.id, data).subscribe((res) => {
      if (res.status == 1) {
        this.ngOnInit();
        this.toastr.success("user deleted successfully!", "Success");
      }
      console.log(res);
    });
  }

  //update users

  getUser() {
    this.userData = JSON.parse(localStorage.getItem("user") || "{}");
    console.log(this.userData);
  }

  updateData = {
    _id: "",
    name: "",
    email: "",
    gender: "",
    phone: "",
  };

  selectedUser: any;
  openUserDetailModal(user: any) {
    this.selectedUser = user;
  }
  getSelectedUser(user) {
    console.log(user);
    this.updateData._id = user._id;
  }

  updateUser(user: any) {
    this.updateData = this.userData;
    this.updateData._id = this.userData.id;
    // if (this.updateData.name !== "") {
    //   console.log(this.updateData);
    // }
    {
      console.log(this.updateData);
      this.updated = true;
      this.service.updateUser(this.updateData).subscribe((res) => {
        this.updated = false;
        console.log(res);
        if (res.status == 1) {
          localStorage.setItem("user", JSON.stringify(res.user));
          console.log(res.user);
        } else {
          alert(res.message);
        }
      });
    }
  }
}
