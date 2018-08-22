import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {URLSearchParams} from '@angular/http'
let params = new URLSearchParams();

@Injectable({
  providedIn: 'root'
})
export class LicenseService {
  
  url = 'https://jsonplaceholder.typicode.com';
  constructor(private http: HttpClient) { }

  getLicense(query:any) {
    for(let key in query){
      params.set(key, query[key]) 
  }
    return this
            .http
            .get(`${this.url}/${params}`);
        }
}
