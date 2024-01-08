import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "environments/environment";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class UploadServices {
  url = environment.url;

  constructor(private http: HttpClient) {}

  //renter
  upload(data: any): Observable<any> {
    return this.http.post(this.url + "upload/multer", data);
  }
}
