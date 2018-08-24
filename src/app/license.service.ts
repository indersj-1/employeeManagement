import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import {URLSearchParams} from '@angular/http'
// let params = new URLSearchParams();

@Injectable({
  providedIn: 'root'
})
export class LicenseService {
  
  url = 'http://jsonplaceholder.typicode.com/posts';
  constructor(private http: HttpClient) { }

  getLicense(query:any) {
  //   for(let key in query){
  //     params.set(key, query[key]) 
  // }
    // return this
    //         .http
    //         .get(`${this.url}/${params}`);
    //     }
    return this
    .http
    .post(`${this.url}`,query);
  }
}
}
