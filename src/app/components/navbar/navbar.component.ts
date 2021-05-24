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
  userName = '';

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    Emitters.userEmitter.subscribe((user: any) => {
      console.log('user in nav = ', user);
      this.userName = user.name;
      this.userExist = true;
    });
  }

  logout(): void {
    this.http
      .get('http://127.0.0.1:3000/api/users/logout', {
        withCredentials: true,
      })
      .subscribe(() => {
        this.userExist = false;
        this.router.navigate(['login']);
      });
  }
}
