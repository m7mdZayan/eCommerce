import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../../Product';
import { OrdersService } from '../../services/orders.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  @Input() product: any = {};
  // @Output() click = new EventEmitter();

  constructor(private orderService:OrdersService, private router: Router) {}

  ngOnInit(): void {}

  // onClick(product: Product){
  //   // let cartId = localStorage.getItem('cartId');
  //   this.click.emit();
  //   console.log("from on click");
  // }
  addToCart(product: Product){
    // this.router.navigate(['shoppingCart'], {
    //   state: {
    //     frontEnd: JSON.stringify({product})
    //   }
    // });
    this.orderService.setData(product);
    // console.log("from add to cart" + product.title);
  }
}
