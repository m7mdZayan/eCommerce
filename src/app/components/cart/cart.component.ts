import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  products = [
    {id:1, title:"sks", price:265}
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
