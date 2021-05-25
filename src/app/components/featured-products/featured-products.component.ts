import { Component, OnInit } from '@angular/core';
import { featured } from './../../mocks/index';

@Component({
  selector: 'app-featured-products',
  templateUrl: './featured-products.component.html',
  styleUrls: ['./featured-products.component.css']
})
export class FeaturedProductsComponent implements OnInit {
  featured: any = featured;
  constructor() { }

  ngOnInit(): void {
  }

}
