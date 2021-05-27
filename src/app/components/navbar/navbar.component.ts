import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Emitters } from 'src/app/emitters/emitters';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  // @Input() userName = '';
  userExist: boolean = false;
  userName:any = '';
  id:any = '';
  // id:string = "60a9bd6b6aa18d2e20b9e609";
  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.id = localStorage.getItem("user_id");
    this.userName = localStorage.getItem("user_name");
    
    if(document.cookie){
      this.userExist = true;
    }
    Emitters.userEmitter.subscribe((user: any) => {
      this.userName = user.name;
      this.userExist = true;
      this.id = user._id;
      localStorage.setItem("user_id",user._id);
      localStorage.setItem("user_name",user.name);
    },
    (err) => console.log(err));
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
  }
}
