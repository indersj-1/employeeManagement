import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URLSearchParams } from '@angular/http'
let params = new URLSearchParams();

@Injectable({
  providedIn: 'root'
})
export class LicenseService {

  url = 'http://localhost:53520/api/license';
  constructor(private http: HttpClient) { }

  postLicense(query: any) {
 
    return this
      .http
      .post(`${this.url}`, query);

  }

  getLicense(LicenseKey: any) {
    // for (let key in query) {
    //   params.set(key, query[key])
    // }
    return this
      .http
      .get(`${this.url}/${LicenseKey}`);
  }
}
