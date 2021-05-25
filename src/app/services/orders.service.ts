import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Product } from '../Product';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  constructor() { }
  private data:any = [];
  private emitChangeSource = new Subject<any>();

  changeEmitted$ = this.emitChangeSource.asObservable();

  emitChange(product:Product){
    // console.log(product.title);
    this.emitChangeSource.next(product);
  }

  setData(data:any){
      this.data.push(data);
  }

  getData():any{
      return this.data;
  }
  
}
