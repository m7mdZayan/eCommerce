import { Component, OnInit } from '@angular/core';
import { Emitters } from 'src/app/emitters/emitters';

@Component({
  selector: 'app-login-nav',
  templateUrl: './login-nav.component.html',
  styleUrls: ['./login-nav.component.css'],
})
export class LoginNavComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    Emitters.userEmitter.subscribe((user: any) => {
      console.log('user from home = ', user);
    });
  }
}
