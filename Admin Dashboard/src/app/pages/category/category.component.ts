import { Component, OnInit } from "@angular/core";
import { CategoryServices } from "app/services/categories.services";
import { ToastrService } from "ngx-toastr";
import { Router } from "@angular/router";

@Component({
  selector: "category-cmp",
  moduleId: module.id,
  templateUrl: "category.component.html",
})
export class CategoryComponent implements OnInit {
  categoryData: any = { name: "", description: "", image: "" };
  categories: any;
  users: any;
  category: any;
  constructor(
    private service: CategoryServices,
    // private storage: StorageServices,
    private router: Router,
    private toastr: ToastrService
  ) {
    this.getAll();
  }
  ngOnInit() {}
  getAll() {
    this.service.getallCategories().subscribe((res) => {
      if (res.status == 1) {
        this.categories = res.data;
        console.log("sherry:", res.data);
      }
    });
  }
  id: any;

  deletecategoryData(category: any) {
    this.id = category._id;
    console.log("user:", category);
    let data = {
      status: -1,
    };
    this.service.deleteCategory(this.id, data).subscribe((res) => {
      console.log(res, "data deleted");
      if (res.status == 1) {
        this.toastr.success("Category deleted successfully!", "Success");

        // Remove the deleted category from the categories array
        const index = this.categories.findIndex((c) => c._id === this.id);
        if (index !== -1) {
          this.categories.splice(index, 1);
        }

        // Optionally, you can also clear the id variable if you no longer need it
        this.id = null;
      }
      console.log(res);
    });
  }

  saveCategory() {
    if (!this.categoryData.name || !this.categoryData.description) {
      this.toastr.error(
        "Please enter both a category name and a description.",
        "Failure"
      );
      return;
    }
    this.service.create(this.categoryData).subscribe((res) => {
      console.log("Server response:", res);
      if (res.status == 1) {
        // Successfully created category
        console.log("Category created successfully!");
        // Show a Toastr success message
        this.toastr.success("Category created successfully!", "Success");
        this.router.navigate(["/category"]);
        this.getAll();
        // Optionally, clear the input fields after successful creation
        this.categoryData.name = "";
        this.categoryData.description = "";
      } else {
        // Handle the case where category creation failed.
        alert(res.message);
      }
    });
  }
}
