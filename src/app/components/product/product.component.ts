import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../../Product';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  @Input() product: any = {};

  constructor(private orderService:OrdersService) {}

  ngOnInit(): void {}

  addToCart(product: Product){
    this.orderService.setData(product);
  }
}
