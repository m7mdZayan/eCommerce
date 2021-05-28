import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  private data:any = [];
  private dataInLocalStorage:any;
  private apiUrl = 'http://127.0.0.1:3000/api/orders';
  
  
  constructor(private myClient:HttpClient) { }

  setData(data:any){
      this.data = this.getData();
      this.data.push(data);
      localStorage.setItem("My_Shopping_Cart",JSON.stringify(this.data));
  }

  getData():any{
    this.dataInLocalStorage = localStorage.getItem("My_Shopping_Cart");

    if(this.dataInLocalStorage) this.dataInLocalStorage = JSON.parse(this.dataInLocalStorage);
    else this.dataInLocalStorage = [];
    return this.dataInLocalStorage;
  }

  clearData(){
    this.data = [];
    localStorage.removeItem("My_Shopping_Cart");
  }

  deleteProduct(i:number){
    let allProducts = this.getData();
    allProducts.splice(i,1);
    localStorage.setItem("My_Shopping_Cart",JSON.stringify(allProducts));
  }

  makeOrder(totalPrice:number){
    let order = {
      totalPrice: totalPrice,
      products: this.getData(),
      owner: localStorage.getItem("user_id")
    }
    return this.myClient.post(this.apiUrl, order, {withCredentials: true});
  }

  getOrderTotal(){
    return this.myClient.get(this.apiUrl+'/get/count');
  }
  getOrderSales(){
    return this.myClient.get(this.apiUrl+'/get/totalsales');
  }
  
}
