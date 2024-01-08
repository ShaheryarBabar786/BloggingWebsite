import { Component, OnInit } from "@angular/core";
import { NgbDateStruct } from "@ng-bootstrap/ng-bootstrap";
import { BlogServices } from "app/services/blogs.services";
import { environment } from "environments/environment";
@Component({
  selector: "app-components",
  templateUrl: "./components.component.html",
  styles: [
    `
      ngb-progressbar {
        margin-top: 5rem;
      }
    `,
  ],
})
export class ComponentsComponent implements OnInit {
  url = environment.url;
  page = 4;
  page1 = 5;
  focus;
  focus1;
  focus2;
  date: { year: number; month: number };
  model: NgbDateStruct;
  blogs: any[];
  truncatedTextLength = 100; // Set the desired length for truncated text
  categories: any;
  constructor(private service: BlogServices) {
    this.getAllCategory();
  }
  ngOnInit() {
    this.getAllBlogs();
  }
  getAllBlogs() {
    this.service.getAll().subscribe((res) => {
      if (res.status === 1) {
        this.blogs = res.data.map((blog) => {
          blog.truncatedDescription = this.truncateText(
            blog.description,
            this.truncatedTextLength
          );
          return blog;
        });
      }
    });
  }
  getAllCategory() {
    this.service.getallCategories().subscribe((res) => {
      if (res.status == 1) {
        this.categories = res.data;
      }
    });
  }
  truncateText(text: string, maxLength: number): string {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + ".........";
    }
    return text;
  }
  getBlogsByCategory(categoryId: string) {
    this.service.getBlogsByCategory(categoryId).subscribe((res) => {
      if (res.status === 1) {
        this.blogs = res.data.map((blog) => {
          blog.truncatedDescription = this.truncateText(
            blog.description,
            this.truncatedTextLength
          );
          return blog;
        });
      }
    });
  }
  onCategoryClick(categoryId: string) {
    this.getBlogsByCategory(categoryId);
    console.log("clicked");
  }
}
