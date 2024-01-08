import { Component, OnInit } from "@angular/core";
import { ServicesServices } from "app/services/services.services";
import { UploadServices } from "app/services/upload.services";
import { environment } from "environments/environment";

@Component({
  selector: "user-cmp",
  moduleId: module.id,
  templateUrl: "profile.component.html",
})
export class ProfileComponent implements OnInit {
  url = environment.url;
  addData: any = { bio: "", address: "", image: "", phone: "" };

  updated: boolean;
  userData: any;
  id: any;
  user: any;
  updateData: any;
  newElement: string;
  imageData: any;
  addressData: any;
  bioData: any;
  phoneData: string;

  constructor(
    private service: ServicesServices,
    private storage: UploadServices
  ) {
    this.getUser();
  }

  ngOnInit() {
    // Initialize data on component load
    this.bioData = this.userData.bio || "";
    this.addressData = this.userData.address || "";
    this.imageData = this.userData.image || "";
    this.addressData = localStorage.getItem("bioData") || "";
    this.addressData = localStorage.getItem("imageData") || "";
    this.addressData = localStorage.getItem("addressData") || "";
    this.phoneData = localStorage.getItem("phoneData") || "";
  }

  getUser() {
    try {
      this.userData = JSON.parse(localStorage.getItem("user") || "{}");
    } catch (error) {
      console.error("Error retrieving user data from local storage:", error);
    }
  }

  editData = {
    _id: "",
    address: "",
    bio: "",
    image: "",
    phone: "",
  };

  getSelectedUser() {
    this.editData._id = this.userData._id;
  }

  addNewElement() {
    this.updated = true;
    this.editData._id === this.userData._id;

    if (this.editData._id === this.userData._id) {
      // Update only the relevant field data
      if (this.editData.bio) {
        this.bioData = this.editData.bio;
        // Update localStorage with the new bioData
        localStorage.setItem("bioData", this.bioData);
      }
      if (this.editData.image) {
        this.imageData = this.editData.image;
        // Update localStorage with the new imageData
        localStorage.setItem("imageData", this.imageData);
      }
      if (this.editData.address) {
        this.addressData = this.editData.address;
        // Update localStorage with the new addressData
        localStorage.setItem("addressData", this.addressData);
      }
      if (this.editData.phone) {
        this.phoneData = this.editData.phone;
        // Update localStorage with the new addressData
        localStorage.setItem("addressData", this.phoneData);
      }

      this.service.addElement(this.editData).subscribe((res) => {
        this.updated = false;
        console.log(res);
        if (res.status == 1) {
          localStorage.setItem("user", JSON.stringify(this.userData));
          this.userData = res.user;
          // Do not call ngOnInit() here; it's not the correct way to update the component.
          console.log(res.user);
        } else {
          alert(res.message);
        }
      });
    }
  }

  //image upload
  img = "";
  selectedFileName: string = "";
  onselectImage(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.selectedFileName = file.name;
      file.onload = (event: any) => {
        this.img = event.target?.result;
      };
      this.img = file;
      this.onsave();
    }
  }
  onsave() {
    const formData = new FormData();
    formData.append("fileSource", this.img);
    this.storage.upload(formData).subscribe((res) => {
      console.log(res);
      if (res["status"] == 1) {
        this.editData.image = res["fileName"];
      } else {
        alert(res.message);
      }
    });
  }
}
