import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductsService } from './../../../services/products.service';


@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {
  title: any;
  price: any;
  details: any;
  photo: any;
  

  
  constructor(private productService: ProductsService, private router: Router) { }

  ngOnInit(): void {}
  Add(){
    let product = {
      title:this.title,
      price:this.price,
      details:this.details,
      photo:this.photo,
      amount: 5
    }
    
    this.productService.addNewProduct(product).subscribe(
      (res)=>{console.log(res)},
      (err)=>{console.log(err)},
    );
    
    this.router.navigateByUrl('dashboard/products');
  }
} 


