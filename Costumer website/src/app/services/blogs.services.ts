import { HttpClient } from "@angular/common/http";

import { Observable } from "rxjs";
import { environment } from "../../environments/environment";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class BlogServices {
  url = environment.url;

  constructor(private http: HttpClient) {}

  create(data: any): Observable<any> {
    return this.http.post(this.url + "blog/create", data);
  }
  getAll(): Observable<any> {
    return this.http.get(this.url + "blog/getAll");
  }
  deleteCategory(id, data): Observable<any> {
    return this.http.post(this.url + "blog/delete/" + id, data);
  }
  getallCategories(): Observable<any> {
    return this.http.get(this.url + "category/getAll");
  }

  getBlogsByCategory(categoryId: string): Observable<any> {
    return this.http.get(this.url + `blog/getByCategory/${categoryId}`);
  }
}
