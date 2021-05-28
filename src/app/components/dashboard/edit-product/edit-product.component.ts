import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from './../../../services/products.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  constructor(private route: ActivatedRoute, private productService: ProductsService, private router: Router) { }
  title: any;
  price: any;
  details: any;
  photo: any;
  productUP:any 

  productId: any
  ngOnInit(): void {
    this.productId = this.route.snapshot.params.id;
    console.log(this.productId);
    this.productService.getProductById(this.productId).subscribe(
      (res)=>{this.productUP = res; console.log(this.productUP)},
      (err)=>{console.log(err)},
    );
  }
  Update(){
    
    this.productService.updateProductById(this.productId, this.productUP).subscribe();
    this.router.navigateByUrl('/dashboard/products');
  }

}
