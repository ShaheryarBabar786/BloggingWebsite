import { HttpClient } from "@angular/common/http";

import { Observable } from "rxjs";
import { environment } from "../../environments/environment";

import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class StorageServices {
  url = environment.url;

  constructor(private http: HttpClient) {}

  //renter
  upload(data: any): Observable<any> {
    return this.http.post(this.url + "upload/multer", data);
  }
}
