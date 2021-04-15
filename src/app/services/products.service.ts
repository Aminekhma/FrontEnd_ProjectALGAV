import { Injectable } from '@angular/core';
import products from '../assets/data/products.json'
import { HttpClient } from '@angular/common/http'; 

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  urlApi;

  constructor(public http: HttpClient) {
    this.urlApi = "http://127.0.0.1:8000/products/";  
  }

  getData(){
    return this.http.get(this.urlApi);
  }

  get(url){
    return this.http.get(url);
  }


}
