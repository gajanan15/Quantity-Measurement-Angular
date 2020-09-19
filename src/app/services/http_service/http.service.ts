import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  baseUrl = environment.apiUrl;
  constructor(private http: HttpClient) {}

  getPostData() {
    return this.http.get(this.baseUrl);
  }
}
