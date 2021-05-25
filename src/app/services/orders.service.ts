import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  private data:any = [];
  private dataInLocalStorage:any;
  
  constructor(private myClient:HttpClient) { }

  setData(data:any){
    
      this.data = this.getData();
      this.data.push(data);
      localStorage.setItem("My_Shopping_Cart",JSON.stringify(this.data));
  }

  getData():any{
    this.dataInLocalStorage = localStorage.getItem("My_Shopping_Cart");
    // console.log(this.dataInLocalStorage);

    if(this.dataInLocalStorage) this.dataInLocalStorage = JSON.parse(this.dataInLocalStorage);
    else this.dataInLocalStorage = [];
    // console.log(this.dataInLocalStorage);
    return this.dataInLocalStorage;
  }

  clearData(){
    this.data = [];
    localStorage.removeItem("My_Shopping_Cart");
  }

  deleteProduct(i:number){
    let allProducts = this.getData();
    // let index = allProducts.findIndex((p: Product) => p==product);
    allProducts.splice(i,1);
    localStorage.setItem("My_Shopping_Cart",JSON.stringify(allProducts));
    // console.log(allProducts);
    // console.log(removed);
    // console.log(i);
  }


  
}
