import { Component, Input, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import {from, Subject } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  @Input() userName = '';
  enteredValue: any;
  matchedProduct:any;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {}
  searchData(){
    const params = new HttpParams().set('title', this.enteredValue);
    this.http.get('http://localhost:3000/api/products/search',{params})
    .subscribe(response => {
         console.log(response);
         this.matchedProduct = response
     });
  }
}
