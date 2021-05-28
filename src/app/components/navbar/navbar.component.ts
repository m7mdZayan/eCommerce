import { HttpClient } from '@angular/common/http';
import { Emitters } from 'src/app/emitters/emitters';
import { Router } from '@angular/router';
import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { OrdersService } from 'src/app/services/orders.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  // @Input() userName = '';
  userExist: boolean = false;
  isAdmin:any = '';
  userName:any = '';
  id:any = '';
  products:any;
  // id:string = "60a9bd6b6aa18d2e20b9e609";
  constructor(private http: HttpClient, private router: Router, private ordersService:OrdersService) {
    
  }

  ngOnInit(): void {
    this.id = localStorage.getItem("user_id");
    this.userName = localStorage.getItem("user_name");
    this.isAdmin = localStorage.getItem("user_role") == 'admin' ? true : false;

    this.products = this.ordersService.getData();
    
    if(document.cookie){
      this.userExist = true;
    }
    Emitters.userEmitter.subscribe((user: any) => {
      this.userName = user.name;
      this.userExist = true;
      this.id = user._id;
      localStorage.setItem("user_id",user._id);
      localStorage.setItem("user_name",user.name);
      localStorage.setItem("user_role",user.role);
    },
    (err) => console.log(err));

    setInterval(()=>{
      this.products = this.ordersService.getData();
    },500)
  }

  

  logout(): void {
    this.http
      .get('http://127.0.0.1:3000/api/users/logout', {
        withCredentials: true,
      })
      .subscribe(() => {
        this.userExist = false;
        // this.router.navigate(['login']);
      });
      localStorage.removeItem("user_id");
      localStorage.removeItem("user_name");
      localStorage.removeItem("user_role");
      localStorage.removeItem("My_Shopping_Cart");
  }
}
