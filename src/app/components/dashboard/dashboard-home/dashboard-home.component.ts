import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ProductsService } from './../../../services/products.service';
import { UserService } from './../../../services/user/user.service';
import { OrdersService } from './../../../services/orders.service';

@Component({
  selector: 'app-dashboard-home',
  templateUrl: './dashboard-home.component.html',
  styleUrls: ['./dashboard-home.component.css']
})
export class DashboardHomeComponent implements OnInit {
  products: any
  productCount: any

  totalOrders: any
  salesOrders: any

  userCount: any



  constructor(private productService: ProductsService, private userService: UserService, private orderService: OrdersService ) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(
      (data) => (this.products = data),
      (err) => console.error(err),
    );
    this.productService.getProductCount().subscribe(
      (data) => (this.productCount = data),
      (err) => console.error(err),
    );

    this.orderService.getOrderTotal().subscribe(
      (data) => (this.totalOrders = data),
      (err) => console.error(err)
    );
    this.orderService.getOrderSales().subscribe(
      (data) => (this.salesOrders = data),
      (err) => console.error(err)
    );

    this.userService.getUserCount().subscribe(
      (data) => (this.userCount = data),
      (err) => console.error(err)
    );


  }
  deleteProduct(e: any, id: string) {
    e.preventDefault()
    this.productService.deleteProductById(id).subscribe(
      ()=>{ this.ngOnInit() },
      (err) => {console.log(err)}
    )
  }

}
