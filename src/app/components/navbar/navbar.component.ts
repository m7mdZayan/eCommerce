import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { OrdersService } from 'src/app/services/orders.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  @Input() userName = '';
  products:any;

  constructor(private ordersService:OrdersService) {
    this.products = this.ordersService.getData();
    setInterval(()=>{
      this.products = this.ordersService.getData();
    },500)
  }

  ngOnInit(): void {}

}
