import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  @Input() productName = '';
  @Input() productDescription = '';
  @Input() productImg = '';
  @Input() productPrice = '';

  constructor() {}

  ngOnInit(): void {}
}