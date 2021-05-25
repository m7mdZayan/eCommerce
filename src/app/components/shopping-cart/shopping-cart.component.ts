import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  // data:any;
  // routeState:any;

  products;
  totalPrice=0;

  constructor(private router:Router, private ordersService:OrdersService) {
   
    // console.log(this.ordersService.getData());
    this.products = this.ordersService.getData();
    // console.log(this.products.length);
    // if(this.router.getCurrentNavigation()?.extras.state){
    //   this.routeState = this.router.getCurrentNavigation()?.extras.state;
    //   if(this.routeState){
    //     this.data.frontEnd = this.routeState.frontEnd ? JSON.parse(this.routeState.frontEnd) : '';
    //   }
    // }
   }

  ngOnInit(): void {
    for(let i=0; i<this.products.length;i++){
      this.totalPrice += this.products[i].price;
    }
  }

  getTotalPrice(){
    for(let i=0; i<this.products.length;i++){
      this.totalPrice += this.products[i].price;
    }
  }
  checkout(){
    this.products = [];
    this.totalPrice = 0;
    // localStorage.removeItem("My_Shopping_Cart");
    this.ordersService.clearData();

  }
}
