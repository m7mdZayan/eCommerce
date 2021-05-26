import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  id:any;
  orderid:any;
  user:any;
  orders:any;
  products:any;
  constructor(private myActivated : ActivatedRoute, private myService:UserService) { 
    this.id = this.myActivated.snapshot.params.id;
    console.log(this.id);
  }

  ngOnInit(): void {
    this.myService.getUser(this.id).subscribe(
    // (res)=>{console.log(res)},
      (res)=>{this.user=(res); console.log(res);
        this.orders=this.user.user.orders;
        this.orders.forEach((order:any) => {
          this.products = order.products
          // console.log(order.products);
        });
       },
      (err)=>{console.log(err)}
    )
  }

}


