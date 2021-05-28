import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../Product';


@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private apiUrl = 'http://127.0.0.1:3000/api/products';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<any> {
    return this.http.get<any>(this.apiUrl, { withCredentials: true });
  }
  // getProducts() {
  //   return this.http.get(this.apiUrl);
  // }
  
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
    return this.http.patch(this.apiUrl+'/'+id , product);
  }
  getProductCount(){
    return this.http.get(this.apiUrl+'/get/count', { withCredentials: true });
  }

}
