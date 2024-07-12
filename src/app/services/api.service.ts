import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  SERVER_URL = 'https://dummyjson.com/recipes'
  constructor(private http: HttpClient) { }

  getRecipiesAPI() {
    return this.http.get(`${this.SERVER_URL}`)
  }

}
