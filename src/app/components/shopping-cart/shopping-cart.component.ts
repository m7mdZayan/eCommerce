import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  products;
  totalPrice=0;
  
  constructor(private ordersService:OrdersService) {   
    this.products = this.ordersService.getData();
   }

  ngOnInit(): void {
    this.getTotalPrice();
  }

  getTotalPrice(){
    let totalPrice=0;
    for(let i=0; i<this.products.length;i++){
      totalPrice += this.products[i].price;
    }
    this.totalPrice = totalPrice;
  }
  deleteProduct(i:number){
    this.ordersService.deleteProduct(i);
    this.products = this.ordersService.getData();
    this.getTotalPrice();
  }

  checkout(){
    let grandTotal = this.totalPrice + 0.1 * this.totalPrice;
    if(this.ordersService.getData().length == 0) alert("Your cart is empty!");
    else{
      this.ordersService.makeOrder(grandTotal).subscribe(
        (res)=>{console.log(res); alert("Order has been sent successfully :)");},
        (err)=>{console.log(err)}
      );
      this.products = [];
      this.totalPrice = 0;
      this.ordersService.clearData();
    }
  }
}
