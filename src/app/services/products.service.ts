import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../Product';


@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private apiUrl = 'http://localhost:3000/api/products';

  constructor(private http: HttpClient) {}

  getProducts() {
    return this.http.get(this.apiUrl);
  }
  
  getProductById(id: any){
    return this.http.get(this.apiUrl+'/'+id);
  }
  addNewProduct(product: any){
    return this.http.post(this.apiUrl+`/create`,product);
  }
  deleteProductById(id: any){
    return this.http.delete(this.apiUrl+'/'+id);
  }
  updateProductById(id:any,product:any){
    return this.http.put(this.apiUrl+'/'+id,product);
  }

}
