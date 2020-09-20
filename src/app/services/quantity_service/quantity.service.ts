import { HttpService } from './../http_service/http.service';
import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class QuantityService {
  baseUrl = environment.apiUrl;
  constructor(private http: HttpService) {}

  conversionValue(data) {
    return this.http.postService(data, this.baseUrl + `unit/convert`);
  }
}
