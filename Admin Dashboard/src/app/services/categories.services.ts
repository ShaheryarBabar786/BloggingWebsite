import { HttpClient } from "@angular/common/http";

import { Observable } from "rxjs";
import { environment } from "../../environments/environment";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class CategoryServices {
  url = environment.url;

  constructor(private http: HttpClient) {}

  create(data: any): Observable<any> {
    return this.http.post(this.url + "category/create", data);
  }
  getallCategories(): Observable<any> {
    return this.http.get(this.url + "category/getAll");
  }
  deleteCategory(id, data): Observable<any> {
    return this.http.post(this.url + "category/delete/" + id, data);
  }
}
