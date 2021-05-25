import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Product } from '../Product';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  constructor() { }
  private data:any = [];
  private dataInLocalStorage:any;
 

  setData(data:any){
      this.data = localStorage.getItem("My_Shopping_Cart");
      if(this.data) this.data = JSON.parse(this.data);
      else this.data = [];
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
  
}
