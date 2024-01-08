import { HttpClient } from "@angular/common/http";

import { Observable } from "rxjs";
import { environment } from "../../environments/environment";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class ServicesServices {
  update(updateData: {
    _Id: string;
    name: string;
    email: string;
    gender: string;
  }) {
    throw new Error("Method not implemented.");
  }
  getallProduct() {
    throw new Error("Method not implemented.");
  }
  createPost(postData: {
    _Id: string;
    name: string;
    email: string;
    gender: string;
  }) {
    throw new Error("Method not implemented.");
  }
  url = environment.url;

  constructor(private http: HttpClient) {}

  login(data: any): Observable<any> {
    return this.http.post(this.url + "api/login", data);
  }
  signUp(data: any): Observable<any> {
    return this.http.post(this.url + "api/user/create", data);
  }

  getAllUser(): Observable<any> {
    return this.http.get(this.url + "api//user/getAll");
  }
  updateUser(data: any): Observable<any> {
    return this.http.post(this.url + "api/update", data);
  }
  deleteUser(id, data): Observable<any> {
    return this.http.post(this.url + "api/user/delete/" + id, data);
  }
  // Method to add a new element to the user's data
  addElement(data: any): Observable<any> {
    return this.http.post(this.url + "api/addElement", data);
  }
}
