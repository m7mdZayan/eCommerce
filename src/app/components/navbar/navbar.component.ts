import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  @Input() userName = '';

  constructor() {}
  id:string = "60a9bd6b6aa18d2e20b9e609";

  ngOnInit(): void {}
}
