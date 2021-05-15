import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quote:Quotes[] = [
    new Quotes(1,'faith','winston', 'Find an online version and watch merlin find his son',new Date(2020,3,14)),
    

  ];

  constructor() { }

  ngOnInit(): void {
  }

}
