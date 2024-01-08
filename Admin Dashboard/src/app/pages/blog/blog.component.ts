import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { BlogServices } from "app/services/blogs.services";
import { CategoryServices } from "app/services/categories.services";
import { UploadServices } from "app/services/upload.services";
import { environment } from "environments/environment";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "blog-cmp",
  moduleId: module.id,
  templateUrl: "blog.component.html",
})
export class BlogComponent implements OnInit {
  @ViewChild("closeButton") closeButton: ElementRef;

  url = environment.url;
  blogData: any = {
    image: "",
    name: "",
    mainHeading: "",
    description: "",
    category: "",
    categoryDescription: "",
  };
  selectedBlog: any;

  showAlert() {
    this.toastr.error("Click on detail button to read blog!", "Failed to open");
  }

  id: any;
  blogs: any;
  categories: any;

  constructor(
    private service: BlogServices,
    private categoryService: CategoryServices,
    private router: Router,
    private toastr: ToastrService,
    private storage: UploadServices
  ) {
    this.getAllBlogs();
    this.getAllCategories();
  }
  ngOnInit() {}
  getAllBlogs() {
    this.service.getAll().subscribe((res) => {
      if (res.status == 1) {
        this.blogs = res.data;
      }
    });
  }

  openUserDetailModal(blog: any) {
    this.selectedBlog = blog;
    console.log("Selected Blog:", this.selectedBlog); // Add this line for debugging
  }

  getAllCategories() {
    this.categoryService.getallCategories().subscribe((res) => {
      if (res.status == 1) {
        this.categories = res.data;
        console.log(" category res:", res.data);
      }
    });
  }
  deleteblogData(blog: any) {
    this.id = blog._id;
    console.log("blog:", blog);
    let data = {
      status: -1,
    };
    this.service.deleteCategory(this.id, data).subscribe((res) => {
      console.log(res, "data deleted");
      if (res.status == 1) {
        this.toastr.success("Category deleted successfully!", "Success");
        this.getAllBlogs();
      }
      console.log(res);
    });
  }
  saveBlog() {
    if (
      !this.blogData.image ||
      !this.blogData.name ||
      !this.blogData.mainHeading ||
      !this.blogData.description ||
      !this.blogData.category
    ) {
      this.toastr.error("Please enter complete details", "Failure");
      return;
    }
    this.service.create(this.blogData).subscribe((res) => {
      console.log("Server response:", res);
      if (res.status == 1) {
        this.getAllBlogs();
        // Successfully created category
        console.log("blog created successfully!");
        // Show a Toastr success message
        this.toastr.success("blog created successfully!", "Success");

        // Optionally, clear the input fields after successful creation
        this.blogData.name = "";
        this.blogData.heading = "";
        this.blogData.description = "";
        this.blogData.category = "";
      } else {
        // Handle the case where category creation failed.
        this.toastr.error(res.message, "Failure");
      }
    });
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
        this.blogData.image = res["fileName"];
      } else {
        alert(res.message);
      }
    });
  }

  showFullDescription: boolean = false;

  // Add a method to toggle the showFullDescription property
  blogExpandedStates: boolean[] = [];
  toggleDescription(index: number) {
    this.blogExpandedStates[index] = !this.blogExpandedStates[index];
  }

  navigateToCategoryPage() {
    // Trigger the click event of the "Close" button
    this.closeButton.nativeElement.click();

    // Navigate to the "/category" route
    this.router.navigate(["/category"]);
  }
}
