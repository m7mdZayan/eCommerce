import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ProductsService } from './../../../services/products.service';

@Component({
  selector: 'app-dashboard-home',
  templateUrl: './dashboard-home.component.html',
  styleUrls: ['./dashboard-home.component.css']
})
export class DashboardHomeComponent implements OnInit {
  products: any 
  constructor(private productService: ProductsService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(
      (data) => (this.products = data),
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
