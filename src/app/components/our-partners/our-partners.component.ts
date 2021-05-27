import { Component, OnInit } from '@angular/core';
import { partners } from './../../mocks/index';

@Component({
  selector: 'app-our-partners',
  templateUrl: './our-partners.component.html',
  styleUrls: ['./our-partners.component.css']
})
export class OurPartnersComponent implements OnInit {
  partnerList = partners;
  constructor() { console.log(partners);}

  ngOnInit(): void {
  }

}
