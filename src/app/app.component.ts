import { Component, ViewEncapsulation } from '@angular/core';
import { Product } from './Product';
import { OrdersService } from './services/orders.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'ecommerce';

  constructor(private router:Router, private orderService:OrdersService) {
    // orderService.changeEmitted$.subscribe(product => {
    //   // console.log(product.title);
    //   // this.orderService.emitChange(product);
    // })
    // if(this.router.getCurrentNavigation()?.extras.state){
    //   this.routeState = this.router.getCurrentNavigation()?.extras.state;
    //   if(this.routeState){
    //     this.data.frontEnd = this.routeState.frontEnd ? JSON.parse(this.routeState.frontEnd) : '';
    //   }
    // }
   }

}
