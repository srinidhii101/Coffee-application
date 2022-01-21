import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';


@Injectable({
  providedIn: 'root',
})
export class ProductService {

  constructor(private httpClient: HttpClient) { }

  getProducts() {
     return this.httpClient.get('https://random-data-api.com/api/coffee/random_coffee');
  }

}